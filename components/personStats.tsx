import Statistic from './atoms/statistic';
import { PostModel } from './database/models';

interface Props { readonly post: PostModel; }

const PeopleStats = ({ post }: Props) => {
  const { films = [], vehicles = [], starships = [] } = post;
  return (
    <>
      <Statistic name={'name'} value={post.name} />
      <Statistic name={'height'} value={post.height} />
      <Statistic name={'mass'} value={post.mass} />
      <Statistic name={'hair color'} value={post.hair_color} />
      <Statistic name={'skin color'} value={post.skin_color} />
      <Statistic name={'eye color'} value={post.eye_color} />
      <Statistic name={'birth year'} value={post.birth_year} />
      <Statistic name={'gender'} value={post.gender} />
      <Statistic name={'films'} value={films.length.toString()} />
      <Statistic name={'vehicles'} value={vehicles.length.toString()} />
      <Statistic name={'starships'} value={starships.length.toString()} />
      <Statistic name={'created'} value={new Date(post.created).toLocaleDateString()} />
      <Statistic name={'edited'} value={new Date(post.edited).toLocaleDateString()} />
      <Statistic name={'homeworld api url'} value={post.homeworld} />
      <Statistic name={'api url'} value={post.url} />
    </>
  );
};

export default PeopleStats;
