import vest from "../../../img/vest.jpg";

const News = () => {
  return (
    <>
      <div className="news">
        <a href="#">
          <img src={vest} />
        </a>
        <p>Black Friday na sajtu Polovni automobili </p>
        <p>
          U okviru Black Friday ponude izdvojili smo specijalnu ponudu
          automobila uz sjajne pogodnosti pri kupovini, poput snižene cene,
          punog rezervoara, seta guma, popusta na veliki i mali servis,
          tehničkog pregleda...
        </p>
      </div>
    </>
  );
};

export default News;
