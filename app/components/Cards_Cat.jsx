import { useRouter } from "next/navigation";

export default function Cards_Cat({ title, color }) {


    const router = useRouter();

    function handleCard(){
       
     router.push(`/${title} `)
   
}
   
    return (
      <div onClick={handleCard} className={`w-[120px] h-[80px] p-2 md:h-[250px] md:w-[200px] hover:scale-105 transition-all duration-500  cursor-pointer rounded-md shadow-2xl text-white font-extralight  ${color} items-center justify-center text-center flex`}>
        <h2 className="cursor-pointertext-[16px] md:text-[20px]">{title}</h2>
      </div>
    );
  }
  