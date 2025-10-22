import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Team() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Meet Our Team
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The talented individuals behind LexxStore, dedicated to bringing
              you the best shopping experience.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-2">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://upload.lexxganz.my.id/uploads/Avatar.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="space-y-1 text-center">
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-muted-foreground">CEO</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://upload.lexxganz.my.id/uploads/Avatar.png" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div className="space-y-1 text-center">
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-muted-foreground">Lead Developer</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://upload.lexxganz.my.id/uploads/Avatar.png" />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
            <div className="space-y-1 text-center">
              <h3 className="text-xl font-bold">Alex Martinez</h3>
              <p className="text-muted-foreground">Marketing Manager</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://upload.lexxganz.my.id/uploads/Avatar.png" />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <div className="space-y-1 text-center">
              <h3 className="text-xl font-bold">Sarah Miller</h3>
              <p className="text-muted-foreground">Sales Representative</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://upload.lexxganz.my.id/uploads/Avatar.png" />
              <AvatarFallback>RW</AvatarFallback>
            </Avatar>
            <div className="space-y-1 text-center">
              <h3 className="text-xl font-bold">Robert White</h3>
              <p className="text-muted-foreground">Customer Support</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://upload.lexxganz.my.id/uploads/Avatar.png" />
              <AvatarFallback>EL</AvatarFallback>
            </Avatar>
            <div className="space-y-1 text-center">
              <h3 className="text-xl font-bold">Emily Lee</h3>
              <p className="text-muted-foreground">Product Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
