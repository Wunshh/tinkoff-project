import './TopicVideo.css';

function TopicVideo() {
    return (
        <section className="video">
            <h2 className="materials__title article__title">Диагностика стресса</h2>
            <p className="materials__subtitle article__subtitle">Посмотри замечательный ролик, чтобы понять, как диагностировать свой стресс</p>
            <iframe 
                width="718" 
                height="404" 
                src="https://www.youtube.com/embed/X6m33H9ANSk?list=PLQ-XJe6nVU5DARKZIOc7kcwiR44BFOn7o" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
            />
        </section>
    );
}

export default TopicVideo;