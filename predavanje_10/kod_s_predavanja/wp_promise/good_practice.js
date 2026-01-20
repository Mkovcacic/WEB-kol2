const ms = 1000;
const threshold = 0.1;

class UserDB {
    static is_from_EU(id) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                let prob = Math.random();
                if (prob >= threshold)
                    resolve(true);
                else reject("Something went wrong (EU)");
            }, ms);            

        });

    }

    static is_legal_age(id) {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let prob = Math.random();
                if (prob >= threshold)
                    resolve(true);
                else reject("Something went wrong (AGE)");
            }, ms);
        });
    }

    static get_username(id) {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let prob = Math.random();
                if (prob >= threshold)
                    resolve("jmaltar")
                else reject("Something went wrong (USER)");            
            }, ms);
        });

    }
}


const get_user = (id, callb) => {

    Promise.all([
        UserDB.get_username(id),
        UserDB.is_from_EU(id),
        UserDB.is_legal_age(id)
    ]).then((value) => {

        /*
        const username = value[0];
        const from_EU = value[1];
        const legal_age = value[2];
        */
        
        const [username, from_EU, legal_age] = value;
        const user = { username, from_EU, legal_age };

        callb(user);

    }).catch((error) =>  {
        console.log(error);
    }); 
}

get_user(0, (user) => {
    console.log(user);
});