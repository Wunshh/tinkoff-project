import './TrainingMaterials.css';
import TopicVideo from '../TopicVideo/TopicVideo';
import UsefulKnowledge from '../UsefulKnowledge/UsefulKnowledge';
import Review from '../Review/Review';
import Checklist from '../Checklist/Checklist';
import Advices from '../Advices/Advices';
import TestCard from '../TestCard/TestCard';

function TrainingMaterials() {
    return (
        <section className="materials">
            <TopicVideo />
            <UsefulKnowledge />
            <Review />
            <Checklist />
            <Advices />
            <TestCard />
        </section>
    );
}

export default TrainingMaterials;