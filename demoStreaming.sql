DROP TABLE Content;
DROP TABLE Images;
DROP TABLE Category;

CREATE TABLE IF NOT EXISTS Category (
    id_category int NOT NULL AUTO_INCREMENT,
    nom_category VARCHAR(100) NOT NULL,
    PRIMARY KEY (id_category)
);

CREATE TABLE IF NOT EXISTS Images (
    id_image int NOT NULL AUTO_INCREMENT,
    nom_image VARCHAR(100) NOT NULL,
    url VARCHAR(200) NOT NULL,
    width VARCHAR(20) NOT NULL,
    height VARCHAR(20) NOT NULL,
    PRIMARY KEY (id_image)
);

CREATE TABLE IF NOT EXISTS Content (
    id_content int NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description_content VARCHAR(1000),
    id_image int NOT NULL,
    url_video VARCHAR(200) NOT NULL,
    release_year YEAR NOT NULL,
    id_category int NOT NULL,
    PRIMARY KEY (id_content),
    FOREIGN KEY (id_category) REFERENCES Category(id_category),
    FOREIGN KEY (id_image) REFERENCES Images(id_image)
);

INSERT INTO Category(nom_category) VALUES 
("Movies"),
("Series");

INSERT INTO Images(nom_image, url, width, height) VALUES 
("Dora","https://m.media-amazon.com/images/M/MV5BOTVhMzYxNjgtYzYwOC00MGIwLWJmZGEtMjgwMzgxMWUwNmRhXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg", "3O4px", "473px"),
("Avengers","https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2019/09/01093013/Endgame-Lead-1.jpg", "385px", "209px"),
("The good doctor","https://assets.letemps.ch/sites/default/files/2018-12/good.jpg", "320px", "473px"),
("South Park","https://fr.web.img5.acsta.net/pictures/14/03/24/12/46/257044.jpg", "355px", "473px");


INSERT INTO Content(title, description_content, id_image, url_video, release_year, id_category) VALUES 
("Dora et la cité perdue", "Après des années à explorer la jungle avec ses parents, Dora se prépare à vivre l’épreuve la plus difficile de sa vie : l’entrée au lycée ! Son âme d’exploratrice ressurgit quand elle doit voler à la rescousse de ses parents en danger.
Accompagnée de son fidèle singe Babouche, de son cousin Diego et de nouveaux amis hauts en couleur, Dora embarque dans une folle aventure qui l’amènera à percer le mystère de la Cité d’or perdue.", 1, "https://youtu.be/xUD3J9v2_YY", 2019, 1),

("Avengers", "Un an après avoir été exilé d'Asgard, Loki, le frère de Thor, s’allie avec « l'Autre », le chef d'une race extra-terrestre : les Chitauris. L'Autre souhaite s'emparer du Tesseract, qui est actuellement sur la Terre. Avec l'aide de l'armée des Chitauris, Loki pourra prendre le contrôle de cette planète en échange du Tesseract. Loki se voit confier un sceptre qui l'aidera dans sa mission.", 2, "https://youtu.be/fP2w_UAK6B4", 2019, 1),

("The Good Doctor", "Shaun Murphy est un jeune docteur autiste savant. Il est doté d'une très grande intelligence, mais a également beaucoup de difficultés à communiquer et à gérer les interactions sociales. Rêvant de devenir chirurgien, il intègre en tant qu'interne un service dans le prestigieux Saint Bonaventure Hospital de San José où il est soutenu par le docteur Aaron Glassman, son mentor depuis l'âge de quatorze ans. Celui-ci met son poste de directeur de l’hôpital en danger pour l'engager6. Débordant d'optimisme, Shaun suscite vite de l'admiration chez certains de ses pairs mais doit apprendre à surmonter les préjugés de certains d'entre eux concernant son TSA et prouver ses compétences7. Confronté en permanence à des dilemmes, il doit également relever le défi de cas stimulants.", 3, "https://youtu.be/Soepd523tFk", 2017, 2),

("South Park", "La série met en scène les aventures de quatre enfants d'école primaire : Stan Marsh, Kyle Broflovski, Eric Cartman et Kenny McCormick qui vivent à South Park, petite ville du Colorado. Des phénomènes surnaturels ou des événements politiques motivent un grand nombre de leurs aventures. L'humour de la série se veut absurde, parodique, sarcastique, graveleux et scatologique, mais prend souvent quelques traits de maturité avec des touches de peinture critique et satirique de la société américaine1.", 4, "https://www.youtube.com/watch?v=00Y_pQ8hLjQ", 1997, 2)