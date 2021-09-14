import { PostModel } from './database/models';
import H2 from './atoms/h2';
import ArticleDate from './atoms/articleDate';
import ArticleAuthor from './atoms/articleAuthor';
import ImageDisplay from './atoms/imageDisplay';
import exampleImage from '../public/drop.jpg';

interface Props { post: PostModel; }

/** a post's detail view */
const DocumentDisplay = ({ post }: Props) => {

  const { title, publishDate, author/* , content */ } = post;
  return (
    <section role="article">
      <H2>{title}</H2>
      <ArticleDate date={publishDate} />
      <ArticleAuthor author={author} />
      <ImageDisplay
        description="a local example image"
        src={exampleImage}
        width={300}
        height={300}
        aboveFold={true}
      />
      <ImageDisplay
        description="a remote example image"
        src={'https://karshhagan-website.s3.amazonaws.com/upload/KH_ABOUT_Boots_0359-1.jpg'}
        width={300}
        height={300}
        aboveFold={true}
      />
    </section>
  );
};

export default DocumentDisplay;
