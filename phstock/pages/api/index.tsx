import PocketBase from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090');

export default async function getPages() {
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