import Config from "@/components/Config";
import Footer from "@/components/Footer";
import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

export const dynamicParams = true;

export default async function Page({ params }) {
  let slug = params?.slug ? params?.slug.join("/") : "home";

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: "draft",
    cv: Math.random(),
  });
  let { data: config } = await storyblokApi.get("cdn/stories/config");
  // console.log("data", data);
  return (
    <div className="relative">
      <Config blok={config?.story?.content} />
      <div className="min-h-screen">
        <StoryblokStory story={data?.story} />
      </div>
      <Footer blok={config?.story?.content} />
    </div>
  );
}

export async function generateMetadata({params}) {
  let slug = params.slug ? params.slug.join("/") : "home";

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: "draft",
    cv: Math.random(),
  });
  // console.log("data",data.story.content.seo);
  return {
    title: data.story?.content?.seo?.title || "Lie Down Lose Weight",
    description:data.story?.content?.seo?.description || "Lie Down Lose Weight",
    alternates: {
      canonical: `/${slug}`
    }
  }
}

export async function generateStaticParams() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/", {
    version: "draft",
  });
  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data?.links[linkKey].is_folder) {
      return;
    }
    const slug = data?.links[linkKey].slug;

    if (slug == "home") {
      return;
    }

    let splittedSlug = slug.split("/");

    paths.push({ slug: splittedSlug });
  });
  return paths;
}
