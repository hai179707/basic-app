import { FC, useEffect, useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import SectionTitle from "./SectionTitle";
import { getBlogPosts } from "@/services/blogPosts";
import { BlogsData } from "@/types";
import Image from "next/image";
import Paragraph from "./Paragraph";
import Link from "next/link";
import { RxChevronRight } from "react-icons/rx";

const BlogPosts: FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogsData>([]);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await getBlogPosts();
      if (res) setBlogPosts(res);
    };
    fetchApi();
  }, []);

  return (
    <Section pt={120}>
      <SectionTitle align="left" width="1/3">
        <Heading level="h2" size="2xl" sizemd="3xl">
          <span>Our Recent </span>
          Blog Posts
        </Heading>
      </SectionTitle>
      <div className="pt-10 flex flex-wrap w-full gap-y-5 md:px-28 lg:px-0">
        {blogPosts?.map((post) => (
          <div key={post.id} className="px-4 w-full lg:w-1/3">
            <Image
              width={370}
              height={260}
              alt="post"
              src={post.image}
              style={{ width: "100%", height: "auto" }}
              className="rounded-xl"
            />
            <div className="flex justify-between mt-7 mb-3">
              <Paragraph>Posted By: {post.postedBy}</Paragraph>
              <Paragraph>{post.createdAt}</Paragraph>
            </div>
            <Paragraph size="xl" type="black">
              {post.title}
            </Paragraph>
            <Link
              href={post.path}
              className="text-ct-orange flex items-center gap-2 mt-3"
            >
              <span>Learn More </span>
              <RxChevronRight className="text-xl" />
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default BlogPosts;
