import { getPages } from 'pages/api/index'

export default async function PostsPage() {
    
    const pages = await getPages()
    
    const mappedData = pages.map(data => (
        [
        <p>User is {data.user_submitted}</p>,
        <p>text is {data.text}</p>
    ]
    ))

    return(
    <div>
        <h1>Posts</h1>
        <div>
            {mappedData}
        </div>
    </div>   
    )
}