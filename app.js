/*
! Synchronus and Asynchronus
*/

// Synchronus = run code one by one by waiting to finish.
// Asynchronus = run code without one by one by skipping to finish.


// Examples
// Synchronus
// const hello = "world";
// calculate();
// console.log(hello);
// console.log("Welcome"); // output = world, calculate();,Welcome




 // Asynchronus
//  console.log("first");
//  setTimeout(() => console.log("hello world"), 2000);
//  console.log("second"); // output = first,second,hello world


//  Asynchronus function
// fetch() = network request

// examples codes
// console.log("first");
// const data = fetch();
// upddateHomeFeed(data);




/*
!promise syntax
*/


// invocking resolve() function


                                // two excutor para function
// const fetchDataPromise = new Promise((resolve,reject) => {
        // resolve("Data");

       /*  setTimeout(() => {
                        resolve("Data");

                },2000);
        */


// });

// fetchDataPromise.then(() => {
// console.log("Inside then...!");          // output = Inside then...!
// });





// invocking reject() function

                               // two excutor para function
// const fetchDataPromise = new Promise((resolve, reject) => {
//                        setTimeout(()=>{
//                                 reject("Rejected");
//                                 // resolve("Resolved");
//                        },3000);
//                 });

//                 fetchDataPromise.then((data) => {
//                 console.log("Inside then...!",data);   // side then...! Resolved
//                 }).catch((error) => {
//                                 console.log("Inside catch...!",error);  // output = Inside catch...! Rejected
//                 });

/*
!in brief = resolve() - .then
!           reject() - .catch

*/

/*
! login();
! fetchData();
! showHomeFeed();
*/


/*
! callback hell or pyramid of doom
*/


// const login = () => {
//         const loginPromise = new Promise((resolve, reject) => {
//                 setTimeout(() =>  {
//                         resolve("login is finished !");
//                 },3000);
//         });

//         return loginPromise;
// }

// const fetchData = () => {
//         return new Promise((resolve,reject) => {
//                 setTimeout(() => {
//                         console.log("Data has arrived");
//                 },2000);
//         })
// }

// const showHomeFeed = (data) => {
//         console.log("Making home feed using data :",data);
// }



// login().then((loginData)=> {
//         console.log(loginData);
//         fetchData().then((userData) => {
//                 console.log(userData);
//                 showHomeFeed(userData);
//         }).catch((error) => {
//                 console.log(error);
//         });

// }).catch((error) => {
//         console.log("error",error);
// });




/*
! Promise chaining
*/

const login = () => {
        const loginPromise = new Promise((resolve, reject) => {
                setTimeout(() =>  {
                        resolve("login is finished !");
                        // reject("Errorin login ...!");
                },5000);
        });

        return loginPromise;
}

const fetchData = () => {
        return new Promise((resolve,reject) => {
                setTimeout(() => {
                        resolve("Data has arrived");
                        // reject("Error in fetchData..!");

                },2000);
        })
}


const getUserPhotos = () => {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        reject("Error in photos albumn...!");
                        // resolve("Photos have been fetched");
                },3000);
        });
};


const getUserFriends = () => {
        return new Promise((resolve,reject) => {
                setTimeout(() => {
                        resolve("Friends have been fetched");
                },3000);
        });
};

const showHomeFeed = (data) => {
        console.log("making home feed using data : ", data);
}






// login().then((loginData) => {
//         console.log("first then :",loginData);
//         return fetchData();             // return = passing data
// }).then((dataFromFetchData) => {
//         console.log("second then :", dataFromFetchData);
//         return getUserPhotos();
// }).then((userPhotos) => {
//         console.log("third then :", userPhotos);
//         return getUserFriends();
// }).then((userFriends) => {
//         console.log("fourth then :",userFriends);
//         showHomeFeed(userFriends);
// }).catch((error) => {
//         console.log("inside catch error...!", error);
// });



/*
? output =
! first then : login is finished !
! second then : Data has arrived
! third then : Photos have been fetched
! fourth then : Friends have been fetched
! making home feed using data :  Friends have been fetched

*/



/*
! Async / await ( synthetic suger ) syntax (only can use in javascript modules)
*/


// async function

 // for resolve(); function
// const buildUI = async () => {
//                 const loginData = await login(); // await can only use inside of async function
//                 console.log("first then :",loginData);
//                 const dataFromFetchData = await fetchData();
//                 console.log("second then :", dataFromFetchData);
//                 const userPhotos = await getUserPhotos();
//                 console.log("third then :", userPhotos);
//                 const userFriends = await getUserFriends();
//                 console.log("fourth then :",userFriends);
//                 showHomeFeed(userFriends);
// }


/*
! the same output like promise chaining above.
*/


// for reject(); function


// method 1
// const buildUI = async () => {
//         try{
//                 const loginData = await login(); // await can only use inside of async function
//                 console.log("first then :",loginData);
//                 const dataFromFetchData = await fetchData();
//                 console.log("second then :", dataFromFetchData);
//                 const userPhotos = await getUserPhotos();
//                 console.log("third then :", userPhotos);
//                 const userFriends = await getUserFriends();
//                 console.log("fourth then :",userFriends);
//                 showHomeFeed(userFriends);
//         } catch (error){
//                 console.log("error inside of catch...",error);
//         }
// }


// method 2

const buildUI = async () => {

                const loginData = await login(); // await can only use inside of async function
                console.log("first then :",loginData);
                const dataFromFetchData = await fetchData();
                console.log("second then :", dataFromFetchData);
                const userPhotos = await getUserPhotos();
                console.log("third then :", userPhotos);
                const userFriends = await getUserFriends();
                console.log("fourth then :",userFriends);
                showHomeFeed(userFriends);

}

console.log("first console"); // notice process here

// buildUI function is outputing promise object
buildUI().catch((error) => {
        console.log("error inside of buildUI function ....");
});

console.log("second console"); // notice process here

/*
! first console
! second console
! login is finished !
! Data has arrived
! error inside of buildUI function ....
*/