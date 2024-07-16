import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/ui/Icons";

const Profile = () => {
  return (
    <>
      <div className="container mx-auto max-w-[510px] p-10">
        <div className="relative">
          <h1 className="text-md font-bold text-center mb-2">zsiwft...</h1>
          <img
            className="w-full h-52 rounded-3xl"
            src="/src/assets/bg.jpg"
            alt="cover photo"
          />
          <Avatar className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 h-28 w-28">
            <AvatarImage src="/src/assets/profile.jpg" alt="avatar" />
            <AvatarFallback>Profile Image</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className=" text-center mt-8 ">
        <h1 className="font-bold text-2xl">Hussian Watkins</h1>
        <h2 className="text-sm">Chief Technology Officer</h2>
        <p className="text-xs text-neutral-500">H.Watkins@gmail.com</p>
        <p className="text-xs text-neutral-500">+639951234567</p>
        <div className="flex justify-center space-x-2 ">
          <div className="flex flex-col items-center">
            <Badge variant="outline" className="m-3 hover:bg-slate-500">
              {Icons.email({ className: "h-8 w-8 p-2" })}
            </Badge>
            <span className="text-center">Add</span>
          </div>
          <div className="flex flex-col items-center">
            <Badge variant="outline" className="m-3 hover:bg-green-300">
              {Icons.bookmark({ className: "w-8 h-8 p-2" })}
            </Badge>
            <span className="text-center ">Save</span>
          </div>
        </div>
        <div className="flex justify-center mt-5 space-x-8">
          {Icons.facebook({ className: "w-6 h-8" })}
          {Icons.twitter({ className: "w-6 h-8" })}
          {Icons.messenger({ className: "w-7 h-8" })}
          {Icons.earth({ className: "w-7 h-8" })}
          {Icons.call({ className: "w-7 h-8" })}
        </div>
        <br />
        <hr />
      </div>
      <h1 className="font-extrabold text-5xl text-center mt-5">VENTURES.co</h1>

      <h1 className="font-bold text-md m-5">Company Background</h1>
      <p className="ml-5 text-neutral-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <h1 className="font-bold text-md m-5">Our Service</h1>
      <p className="ml-5 text-neutral-500">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod
        tempor incididunt.
      </p>
      <div className="grid grid-cols-2 gap-4 p-4 rounded-lg">
        <div className="aspect-w-1 aspect-h-1 ">
          <img className="rounded-lg" src="/src/assets/bg.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img className="rounded-lg" src="/src/assets/bg.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img className="rounded-lg" src="/src/assets/bg.jpg" alt="" />
        </div>
        <div className="aspect-w-1 aspect-h-1">
          <img className="rounded-lg" src="/src/assets/bg.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Profile;
