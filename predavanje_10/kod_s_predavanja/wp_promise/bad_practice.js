const ms = 1000;
const threshold = 0.1;

class UserDB {
    static is_from_EU(id, s_callb, e_callb) {
        setTimeout(() => {
            let prob = Math.random();
            if (prob >= threshold)
                s_callb(true);
            else e_callb("Something went wrong (EU)");
        }, ms);
    }

    static is_legal_age(id, s_callb, e_callb) {
        setTimeout(() => {
            let prob = Math.random();
            if (prob >= threshold)
                s_callb(true);
            else e_callb("Something went wrong (AGE)");
        }, ms);
    }

    static get_username(id, s_callb, e_callb) {
        setTimeout(() => {
            let prob = Math.random();
            if (prob >= threshold)
                s_callb("jmaltar")
            else e_callb("Something went wrong (USER)");            
        }, ms);
    }
}

// callback hell
// + predugo traje
const get_user = (id, callb) => {

    UserDB.get_username(id, (username) => {
        
        UserDB.is_legal_age(id, (legal_age) => {

            UserDB.is_from_EU(id, (from_EU) => {
                
                const user = {username, legal_age, from_EU};

                callb(user);

            }, (error) => {
                console.error(error);        
            });

        }, (error) => {
            console.error(error);    
        });

    }, (error) => {
        console.error(error);
    });   
}

get_user(0, (user) => {
    console.log(user);
});