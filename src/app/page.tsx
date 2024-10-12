import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col items-center justify-center p-4 h-screen">
        <h1 className="text-3xl font-semibold">Test Title For Project</h1>

        <p className="max-w-[400px] text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet
          purus quis nibh vehicula vehicula.
        </p>
        <div className="flex flex-row py-12 gap-4">
          <Button variant={"default"}>Button 1</Button>
          <Button variant={"outline"}>Button 1</Button>
        </div>

        <Slider className="max-w-[400px] mb-20"></Slider>

        <Card className="max-w-[300px]">
          <CardHeader>
            <CardTitle>Test Card For Project</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
