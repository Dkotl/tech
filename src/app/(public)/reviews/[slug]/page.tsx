import { getReviewsFullInfoBySlug } from "@/entities/reviews/_actions/get_review_full_info_by_slug";
import { increaseReviewsViewsCountAction, ReviewFullInfo } from "@/entities/reviews";
import { Metadata } from "next";
import { generateSEOMetadata } from "@/features/seo/generate_metadata";
import { Card, CardContent, CardHeader, TimeAgo, Title } from "@/shared/components";
import { ImageGalleryComponent } from "@/shared/components/custom/image-galery-react";
import { BookmarksButton } from "@/features/bookmarks/ui/bookmark_button";
import { TagBage } from "@/entities/tag";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const pageParams = await params;
  const review: ReviewFullInfo | null = await getReviewsFullInfoBySlug(pageParams.slug);
  return generateSEOMetadata({
    title: review?.meta_title ? review?.meta_title : "",
    description: `Обзор и описание модели: ${review?.meta_description}`,
    keywords: [
      "брэнды",
      "брэнды смартфонов",
      "технологии",
      "смартфоны",
      "обзоры",
      "новости",
      "новости смартфонов",
      "гаджеты",
      "мобильные телефоны",
      "инновации",
    ],
    ogImage: `${review?.previewImage}`,
    canonical: `https://tech24view.ru/reviews/${review?.slug}`,
  });
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const pageParams = await params;
  const review: ReviewFullInfo | null = await getReviewsFullInfoBySlug(pageParams.slug);
  if (!review) {
    return <div className="text-center py-10 text-foreground">Не удалось получить информацию о обзоре</div>;
  }
  await increaseReviewsViewsCountAction(pageParams.slug);

  return (
    <main className="flex flex-col flex-1 gap-2 md:gap-4">
      <Card className="w-full mx-auto p-2">
        <CardHeader className="p-2">
          <Title text={review.title} size="xl" />
          <div className="md:text-base text-sm flex flex-col  justify-between items-start sm:items-center text-foreground/80">
            <div className="text-xs w-full mt-1.5 flex flex-row items-center justify-between ">
              <TimeAgo date={review.createdAt} />
              <BookmarksButton id={review.id} type="reviews" />
            </div>
            <div className="items-start w-full flex flex-wrap gap-2">
              {review?.tags.map((tag) => <TagBage key={tag.slug} slug={tag.slug} title={tag.title} />)}
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-2">
          {review.previewImage && (
            <ImageGalleryComponent
              imagePaths={[review.previewImage, ...(review.images || []).filter((img) => typeof img === "string")]}
            />
          )}
          <div className="prose" dangerouslySetInnerHTML={{ __html: review.content }} />
        </CardContent>
      </Card>
      <div className="flex flex-row gap-4  justify-between items-center ">
        <Title size="lg" text="Похожие новости" />
      </div>
      {/* <SimilarNews slug={pageParams.slug} /> */}
    </main>
  );
}
