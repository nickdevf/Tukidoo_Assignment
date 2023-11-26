import './App.css';
import Sider from './components/Sider';
import TopNavbar from './components/TopNavbar';
import Header from './components/Header';
import Wrapper from "./components/Wrapper";
import VideoComponentWrapper from "./components/VideoComponentWrapper";

function App() {
    return (
        <div>
            <Sider/>
            <Wrapper>
                <Header/>
                <TopNavbar/>
                <VideoComponentWrapper/>
            </Wrapper>
        </div>
    );
}

export default App;
