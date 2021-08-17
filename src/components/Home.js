import axios from 'axios';

function Home() {

  const defaultChannels = () => {
    axios({
      method: 'GET',
      // url: display list of top channels
    })
  }

  const defaultPosts = () => {
    axios({
      method: 'GET',
      // url: display most liked posts?
    })
  }

  // const defaultComments = 

    return (


      <main className='home'>
        <div className='header'>
          <h1>Welcome to ____!</h1>
          <h3>A Space For Developers Of All Kinds!</h3>
        </div>
        <div className="channels">

        </div>
        <div className='posts'>

        </div>

        {/* div for top comments? some other info? */}

      </main>
    );
  }

  export default Home;