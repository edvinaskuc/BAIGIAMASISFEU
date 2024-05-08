import theLastOfUsPartOne from "./assets/thelastofus2.png";
import theLastOfUsPartTwo from "./assets/thelastofus1.png";
import hellBlade from "./assets/hellblade.jpg";
function Top3() {
  return (
    <>
      <section className="py-5">
        <div className="container px-5 mb-5">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0">
              <span className="text-gradient d-inline">TOP 3 </span>
            </h1>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
              <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                <div className="card-body p-0">
                  <div className="d-flex align-items-center">
                    <div className="p-5">
                      <h2 className="fw-bolder">1# The Last Of Us: Part II</h2>
                      <p>
                        The Last of Us Part II is a 2020 action-adventure game
                        developed by Naughty Dog and published by Sony
                        Interactive Entertainment. Set five years after The Last
                        of Us (2013), the game focuses on two playable
                        characters in a post-apocalyptic United States whose
                        lives intertwine: Ellie, who sets out in revenge for a
                        murder, and Abby, a soldier who becomes involved in a
                        conflict between her militia and a religious cult. The
                        game uses a third-person perspective; the player must
                        fight human enemies and cannibalistic zombie-like
                        creatures with firearms, improvised weapons, and
                        stealth.
                      </p>
                    </div>
                    <img
                      className="img-fluid"
                      src={theLastOfUsPartOne}
                      alt="..."
                    />
                  </div>
                </div>
              </div>

              <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                <div className="card-body p-0">
                  <div className="d-flex align-items-center">
                    <div className="p-5">
                      <h2 className="fw-bolder">2# The Last Of Us: Part I</h2>
                      <p>
                        The Last of Us Part I is a 2022 action-adventure game
                        developed by Naughty Dog and published by Sony
                        Interactive Entertainment. A remake of the 2013 game The
                        Last of Us, it features revised gameplay, including
                        enhanced combat and exploration, and expanded
                        accessibility options. Players control Joel, who is
                        tasked with escorting the young Ellie across a
                        post-apocalyptic United States and defend her against
                        cannibalistic creatures infected by a mutated strain of
                        the Cordyceps fungus. The game includes a remake of the
                        2014 expansion pack The Last of Us: Left Behind, which
                        follows Ellie and her best friend Riley. The original
                        game's online multiplayer mode is omitted.
                      </p>
                    </div>
                    <img
                      className="img-fluid"
                      src={theLastOfUsPartTwo}
                      alt="..."
                    />
                  </div>
                </div>
              </div>

              <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                <div className="card-body p-0">
                  <div className="d-flex align-items-center">
                    <div className="p-5">
                      <h2 className="fw-bolder">
                        3# Hellblade: Senua’s Sacrifice
                      </h2>
                      <p>
                        Hellblade: Senua's Sacrifice is divided into two types
                        of gameplay: the first allows Senua to walk freely and
                        interact with her surroundings. Those parts focus on
                        either story via voiceover, as Senua travels from one
                        location to another, or the resolution of a puzzle or
                        challenge of some kind to progress further. She can use
                        a capacity known as "focus", in reference to her
                        tendency to see things differently from other people due
                        to her condition, to trigger puzzle-related events. If
                        she uses her focus on totems hidden throughout the game,
                        it triggers a memory via voice-over of her friend Druth
                        telling her of the stories of the Norsemen; activating
                        all forty-four of them triggers a bonus cutscene shortly
                        before the game's climax, that extends on Druth's
                        backstory. Several areas feature their own exclusive
                        mechanics or trials, such as reaching a safe zone in
                        time before Senua dies, or using the focus ability to
                        modify the structure of her surroundings.
                      </p>
                    </div>
                    <img className="img-fluid" src={hellBlade} alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-xxl-8">
              <div className="text-center my-5">
                <h2 className="display-5 fw-bolder">
                  <span className=" d-inline">My TOP games</span>
                </h2>
                <p className="lead fw-light mb-4">Why I Chose These Games?</p>
                <p className="text-muted">
                  Together, these games form a mosaic of my gaming identity—a
                  collection not just of titles, but of worlds explored,
                  challenges conquered, and stories lived. Each game speaks to a
                  different facet of my gaming soul, offering unique experiences
                  that have left an indelible mark on my journey through virtual
                  realms.
                </p>
                <div className="d-flex justify-content-center fs-2 gap-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-center flex-column flex-sm-row">
            <div className="col-auto">
              <div className="small m-0">Copyright &copy; LISTME 2024</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Top3;
