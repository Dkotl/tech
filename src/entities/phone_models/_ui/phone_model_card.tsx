import Link from "next/link";
import { PartialPhoneModel } from "../_domain/types";
import { Card, CardContent, CardFooter, CardTitle } from "@/shared/components";
import Image from "next/image";

export function PhoneModelCard({ model }: { model: PartialPhoneModel }) {
  return (
    <Link href={`/phone_model/${model.slug}`}>
      <Card className=" shadow-md transition-all  duration-300 hover:scale-95  hover:shadow-lg hover:bg-foreground/10  p-0 h-full flex flex-col ">
        <CardContent className="p-1 image-safe">
          <Image
            src={model.main_image}
            alt={model.short_name}
            width={100} 
            height={146.5}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-14 h-20 object-fill mx-auto rounded-md" 
            priority={false}
            loading="lazy"
          />
        </CardContent>
        <CardFooter className="flex justify-center p-1">
          <CardTitle className="text-xs flex text-center items-center justify-center">{model.short_name}</CardTitle>
        </CardFooter>
      </Card>
    </Link>
  );
}
