import { PostModel } from './database/models';
import H2 from './atoms/h2';
import ArticleDate from './atoms/articleDate';
import ArticleAuthor from './atoms/articleAuthor';
import ImageDisplay from './atoms/imageDisplay';
import exampleImage from '../public/drop.jpg';

interface Props { readonly post: PostModel; }

/** a post's detail view */
const DocumentDisplay = (props: Props) => {

  const { post } = props;
  const { title, publishDate, author } = post;
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
        src={'https://upload.wikimedia.org/wikipedia/commons/b/b5/Staring_Down_Hurricane_Florence.jpg'}
        width={300}
        height={300}
        aboveFold={true}
      />
    </section>
  );
};

export default DocumentDisplay;
