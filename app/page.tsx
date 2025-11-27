import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image className="w-screen h-screen"
        src={"/Background.jpg"}
        
        width={500}  
        height={500}  
        alt="BackgroundSimpsons"  
      />
    </div>
  );
}
