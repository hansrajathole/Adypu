const obj = {
    name : "raj",
    email : "raj@gmail.com",
    address : {
        city : "pune",
        pin : "444089",
        // phone : "6987349652"
    },

    // contact : {
    //     phone : "69324659234965"
    // }

}

console.log(obj.address.city);

console.log(obj.contact?.phone);
