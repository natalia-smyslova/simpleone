import Subtask from '../../../features/subtask/index';

import BaseLayout from '@/layouts/BaseLayout';

function MainPage() {
  const content = <Subtask />

  return (
    <>
    <BaseLayout children={content}/>
    </>
  )
}

export default MainPage;