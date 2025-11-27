interface ParamsCharacter { 
    params: Promise<{ 
        idcharacter: string
}>  
}

export default async function   IdCharacter({ params }: ParamsCharacter) {
    const { idcharacter } = await params;
    return (
    <>
        <h1>{idcharacter}</h1>
    </>
);  
}
