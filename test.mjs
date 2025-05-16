let [named, email] = ["Waithaka", "edenwaithaka17@gmail.com"];

const testObject = {
    named,
    email ,
    obj: {
        age: 20,
        hobby: "Mountain hike"
    }
}

// to delete  an object
delete testObject.obj

console.log(testObject);
 
import {path,getData, createEntity, updateEntity, deleteEntity} from './crud.mjs';
// createEntity("Odero Alfred", "Oderomsee@gmail.com", "this site is so nice");
// const [updateName, updateEmail, updateInfo] = ["Alfred Rabaich", "Oderomsee@gmail.com", "Hallo Amos the site is so niceand educative!!"];
// deleteEntity("message8")

console.log(getData());

