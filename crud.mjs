import fs from 'node:fs';


/* -- CRUD OPERATIONS FOR THE msgs and Downloads BACKEND -- */ 
export const path = './backend/feedback.json';

export const getData = (pathToDataSource = path) => JSON.parse(fs.readFileSync(pathToDataSource));
const writeData = (data, pathToDataSource = path) => 
     fs.writeFileSync(pathToDataSource, JSON.stringify(data, null, 2));

     /* -- method to create a new entity -- */
export function createEntity(name, email, msgInfo, type="messages"){
     const fullData = getData();
     const len = Object.keys(fullData[type]).length;
     fullData[type][`message${len+1}`] = {
         name,
         email,
          msgInfo
     }
     writeData(fullData);
}

     /* -- method to delete an entity -- */
export function deleteEntity(msgId, type="messages"){
     const fullData = getData();
     delete fullData[type][msgId];
     writeData(fullData);
 }
 
   /* -- method to update an entity -- */
export function updateEntity(msgId, updatedObj, type="messages") {
    const fullData = getData();
    fullData[type][msgId] = updatedObj;
    writeData(fullData);
}

