import { PostModel } from './database/models';
import H2 from './atoms/h2';
import ImageDisplay from './atoms/imageDisplay';
import PeopleStats from 'components/personStats';

interface Props { readonly post: PostModel; }

/** a post's detail view */
const DocumentDisplay = (props: Props) => {
  const { post } = props;
  const { name } = post;
  return (
    <section role="article">
      <H2>{name}</H2>
      <PeopleStats post={post} />
      <br />
      <ImageDisplay
        description="an example image"
        src={'https://upload.wikimedia.org/wikipedia/commons/b/b5/Staring_Down_Hurricane_Florence.jpg'}
        width={300}
        height={300}
        aboveFold={true}
      />
    </section>
  );
};

export default DocumentDisplay;
