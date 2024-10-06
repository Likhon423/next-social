import Image from "next/image";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/21031394/pexels-photo-21031394/free-photo-of-church-of-saint-ildefonso-in-portugal.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Jack McRidge</span>
        </div>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* DESCRIPTION */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/17231332/pexels-photo-17231332/free-photo-of-a-man-on-the-mountain-peak-in-the-fog.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          voluptatibus, praesentium molestiae aut recusandae adipisci id quidem
          necessitatibus? Cum omnis corrupti animi eius voluptatem, dolores
          quaerat molestias? Voluptatem, quaerat error.
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Likes</span>
            </span>
          </div>
        </div>
        <div className=""></div>
      </div>
      {/* USER */}
      <div className=""></div>
    </div>
  );
};

export default Post;
