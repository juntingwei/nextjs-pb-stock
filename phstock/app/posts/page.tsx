import PocketBase from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090');

async function getPages() {
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

      //now lets try turned ProcessedData into an array of JSX objects

    const mappedData = processedData.map(data => (
        [
        <p>User is {data.user_submitted}</p>,
        <p>text is {data.text}</p>
    ]
    ))

    return mappedData
}

export default async function PostsPage() {
    const pages = await getPages()
    console.log(pages)

    return(
    <div>
        <h1>Posts</h1>
        <div>
            {pages}
        </div>
    </div>   
    )
}