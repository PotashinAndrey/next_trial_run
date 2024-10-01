const data = {
    name: "Alex",
    age: 23,
    desc: "some desc for Alex"
}

// export async function GET() {
//     return new Response(JSON.stringify(data));
// }

export async function POST(request: any) {

    return new Response(request.body);
}