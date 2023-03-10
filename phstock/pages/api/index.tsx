import PocketBase from 'pocketbase'
const pb = new PocketBase('http://127.0.0.1:8090');

    //Get all pages

    export async function getPages() {
        const records = await pb.collection('posts').getFullList(200 /* batch size */, {
            sort: '-created',
        });

        interface Data {
            user_submitted: string;
            text: string;
        }

        const processedData: Array<Data> = records.map(({ user_submitted, text }) => ({
            user_submitted,
            text,
        }));

        return processedData
    }

    //Logout

    export function logOutFunction() {
        pb.authStore.clear()
        window.location.reload()
    }

    //Login
    export async function logInFunction(emailInput: string, passwordInput: string) {
        try {
            const authData = await pb.collection('users').authWithPassword(
                `${emailInput}`,
                `${passwordInput}`,
            );
            console.log(authData);
        } catch (error) {
            console.error(error);
        }
        window.location.reload()
    }

    //Get mylistings

    export async function getMyListings(userId: string) {

        const records = await pb.collection('listings').getFullList(200 /* batch size */,
        {
            sort: '-created',
            filter: `user_id = "${userId}"`,
            '$autoCancel': false
        },);

        return records
    }

    export function getUserId() {
        return pb.authStore.model!.id
    }