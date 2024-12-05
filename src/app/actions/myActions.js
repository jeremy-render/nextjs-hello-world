"use server";

export async function newServerAction(data, extraParam) {
    console.log("Executing Version 2 Action:", data, extraParam);
    
    return `Processed by Version 2: ${data}, ${extraParam}`;
};