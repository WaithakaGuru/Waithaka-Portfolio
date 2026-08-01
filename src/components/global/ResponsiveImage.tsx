import { useEffect, useState } from "react";
import { ImagePlaceholder } from "./ImagePlaceholder";
// Vite imagetools result type
export interface ImagetoolsPicture {
  img: { src: string; w: number; h: number };
  sources: Record<string, string>; // e.g. { avif: "a-480.avif 480w, ...", webp: "..." }
}

type Format = "avif" | "webp" | "jpg";

export const IMAGE_VARIANTS = {
  /** SelectedWork sticky cards: full-width on mobile (stacked layout),
   * roughly half the card on desktop (image/info split in two columns). */
  cardThumbnail: {
    sizes: "(max-width: 768px) 100vw, 50vw",
    widths: [480, 800, 1200],
    aspectRatio: undefined, // parent controls height (h-[38vh] md:h-full)
    formats: ["avif", "webp", "jpg"] as Format[],
  },
  /** CaseStudy hero / cover banner — full-bleed at every breakpoint, so it
   * always needs closer to its true rendered width than any other variant. */
  coverImage: {
    sizes: "100vw",
    widths: [800, 1200, 1600, 2000],
    aspectRatio: "16 / 9",
    formats: ["avif", "webp", "jpg"] as Format[],
  },

  // no AVIF for small width images
  gallerySnapshot: {
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    widths: [320, 480, 800],
    aspectRatio: "4 / 3",
    formats: ["webp", "jpg"] as Format[],
  },
  /**Fixed pixel marquee Community cards  */
  marqueeCard: {
    sizes: "(max-width: 639px) 360px, 320px",
    widths: [320, 480, 800],
    aspectRatio: undefined,
    formats: ["webp", "jpg"] as Format[],
  },
} as const satisfies Record<
  string,
  {
    sizes: string;
    widths: readonly number[];
    aspectRatio: string | undefined;
    formats: Format[];
  }
>;

export type ImageVariant = keyof typeof IMAGE_VARIANTS;

interface ResponsiveImageProps {
  alt: string;
  className?: string;
  /** One of the presets above. Sets sensible sizes/widths/aspectRatio
   * defaults for that context — any of the three can still be overridden
   * individually via the props below. */
  variant?: ImageVariant;
  /** Overrides the variant's `sizes`. */
  sizes?: string;
  /** Overrides the variant's `widths` (runtime `src` mode only). */
  widths?: number[];
  /** Overrides the variant's `aspectRatio`. Pass `null` to explicitly opt
   * out of reserving a box (e.g. when the parent already sets a fixed height,
   * as in cardThumbnail). */
  aspectRatio?: string | null;
  /** Set true for the single image most likely to be the LCP element (e.g.
   * a case study's coverImage, or the first visible card). Loads eager +
   * high priority instead of lazy. */
  priority?: boolean;
  /** CSS background (usually the project's gradient) shown behind the image
   * until it finishes loading, then faded out. */
  placeholder?: string;
  /** Message shown by ImagePlaceholder when there's no `src`/`picture`, or
   * the image fails to load at runtime. Defaults to `alt` if omitted. */
  placeholderLabel?: string;
  placeholderAspect?: string;

  // --- pick ONE of the two modes below ---

  /** Build-time mode: pass the object from a vite-imagetools `?responsive` import. */
  picture?: ImagetoolsPicture;
  /** Runtime mode: pass a base path with NO extension and NO width suffix,
   * matching the convention produced by scripts/optimize-images.mjs, e.g.
   * "/images/cs/lsm-tree". Use this for anything coming out of your data
   * model (CaseStudy.coverImage, CaseStudyImage.src) since those are plain
   * strings vite-imagetools can't see at build time. */
  src?: string;
  /** Overrides the variant's `formats`. Only used with `src` mode — must
   * match whatever optimize-images.mjs actually generated for that image's
   * folder, or the missing format's <source> 404s (and won't fall back to
   * the next one — see the gallerySnapshot/marqueeCard comments above). */
  formats?: Format[];
}

const DEFAULT_WIDTHS = [480, 800, 1200, 1600];
const DEFAULT_FORMATS: Format[] = ["avif", "webp", "jpg"];

function buildSrcSet(base: string, format: Format, widths: readonly number[]) {
  return widths.map((w) => `${base}-${w}.${format} ${w}w`).join(", ");
}

export function ResponsiveImage({
  alt,
  className,
  variant,
  sizes,
  widths,
  aspectRatio,
  priority = false,
  placeholder,
  placeholderLabel,
  placeholderAspect,
  picture,
  src,
  formats,
}: ResponsiveImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // If this component instance ever gets reused for a different image
  // (same slot in a list, different data) reset both flags — otherwise a
  // previous image's error/loaded state would incorrectly carry over.
  useEffect(() => {
    setLoaded(false);
    setHasError(false);
  }, [src, picture]);

  if (!picture && !src && import.meta.env.DEV) {
    console.warn(
      "ResponsiveImage: pass either `picture` (static import) or `src` (data-driven path).",
    );
  }

  const preset = variant ? IMAGE_VARIANTS[variant] : undefined;
  const resolvedSizes =
    sizes ?? preset?.sizes ?? "(max-width: 768px) 100vw, 50vw";
  const resolvedWidths = widths ?? preset?.widths ?? DEFAULT_WIDTHS;
  const resolvedFormats = formats ?? preset?.formats ?? DEFAULT_FORMATS;
  // `aspectRatio` prop takes precedence, including an explicit `null` to opt out;
  // otherwise fall back to the variant's default, if any.
  const resolvedAspectRatio =
    aspectRatio !== undefined ? aspectRatio : preset?.aspectRatio;

  // Data-level check: no path was ever provided (empty string, undefined,
  // neither `src` nor `picture` passed in). Bail before rendering an <img>
  // at all — an <img src=""> is its own bug in some browsers (it can
  // re-request the current page).
  const hasSource = Boolean(picture) || Boolean(src && src.trim() !== "");

  // Data-level miss OR runtime miss (onError fired below) both land here —
  // this is the ONLY place ImagePlaceholder gets rendered, so it never
  // flashes during a normal successful load. Same wrapper div/className as
  // the success path below, so a broken image doesn't collapse out of
  // whatever fixed-size slot it's sitting in (e.g. the marquee cards).
  if (!hasSource || hasError) {
    return (
      <div
        className={`relative overflow-hidden w-full h-full ${className ?? ""}`}
        style={
          resolvedAspectRatio ? { aspectRatio: resolvedAspectRatio } : undefined
        }
      >
        <ImagePlaceholder
          label={placeholderLabel ?? alt}
          aspect={placeholderAspect && placeholderAspect}
        />
      </div>
    );
  }

  let sources: Partial<Record<Format, string>>;
  let fallbackSrc: string;
  let intrinsicW: number | undefined;
  let intrinsicH: number | undefined;

  if (picture) {
    sources = picture.sources;
    fallbackSrc = picture.img.src;
    intrinsicW = picture.img.w;
    intrinsicH = picture.img.h;
  } else {
    // `src` is guaranteed non-empty here — `hasSource` already filtered
    // out the empty/missing case above.
    const nonJpg = resolvedFormats.filter((f) => f !== "jpg");
    sources = Object.fromEntries(
      nonJpg.map((f) => [f, buildSrcSet(src as string, f, resolvedWidths)]),
    );
    fallbackSrc = `${src}-${Math.max(...resolvedWidths)}.jpg`;
  }

  return (
    <div
      className={`relative overflow-hidden ${className ?? ""}`}
      style={
        resolvedAspectRatio ? { aspectRatio: resolvedAspectRatio } : undefined
      }
    >
      {/* Loading state: the project's gradient shows through until the real
          image has decoded, so there's never a blank/white flash. */}
      {placeholder && (
        <div
          aria-hidden
          className="absolute inset-0 transition-opacity duration-700 ease-out"
          style={{ background: placeholder, opacity: loaded ? 0 : 1 }}
        />
      )}

      <picture>
        {(Object.entries(sources) as [Format, string][]).map(
          ([format, srcSet]) => (
            <source
              key={format}
              type={`image/${format}`}
              srcSet={srcSet}
              sizes={resolvedSizes}
            />
          ),
        )}
        <img
          src={fallbackSrc}
          alt={alt}
          sizes={resolvedSizes}
          width={intrinsicW}
          height={intrinsicH}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          // fetchPriority is a valid DOM attribute (Chrome/Edge/Safari support it);
          // if your React/TS version predates its typings, this line may need
          // `// @ts-expect-error` until @types/react catches up.
          fetchPriority={priority ? "high" : "auto"}
          onLoad={() => setLoaded(true)}
          // Runtime check: fires on a 404, a corrupt file, a bad path — any
          // case where the browser resolved *a* candidate from `sources`/
          // `fallbackSrc` but couldn't actually decode it. Whichever source
          // the browser picked, a failure surfaces here on the <img> itself.
          onError={() => setHasError(true)}
          className="relative w-full h-full object-cover transition-opacity duration-700 ease-out"
          style={{ opacity: loaded ? 1 : 0 }}
        />
      </picture>
    </div>
  );
}
