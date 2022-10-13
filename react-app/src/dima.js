import React from 'react'

const Dima = () => {
    return (
        <>
        <h2>From kitten to cat</h2>
        <div class="k-t-c-block">
        <p class="kitten-to-cat-p">When I first adopted dima, she was small and afraid.
            First she explored the innards of my desk, to the
            outtings of my apartment. Making sure every ledge, crevice,
            and corner was explored.
        </p>
        <img className='kitten-dima'src="kitten-dima.jpg" alt="kitten dima"/>
        <img className="peekaboo-dima" src="../public/peekaboo-dima.jpg" alt="dima playing peekaboo"/>
        <img className="utility-dima" src="dima-utility.jpg" alt="dima on top of washer"/>
        <img className="dima-dresser" src="dima-dresser.jpg" alt="dima under the dresser"/>
        <img className="dima-cat-tree" src="dima-cat-tree.jpg" alt="dima on cat tree"/>
        <img className="dima-litter" src="dima-litter.jpg" alt="dima in the litterbox"/>
    </div>
        <div className="danger-block">
            <h2 className="journey">Her unfortunate journey</h2>
            <p>When I wasn't home, dima got into something she shouldn't 
                 have. I came home from work and found my dresser on top of her. 
                 She was mostly calm but couldn't move. It wasn't until I freed her 
                 that I noticed what had happened to her. Her arm was broken, so bad
                  amputation was an option if I didn't pay for surgery. I paid for the 
                surgery and made sure she got plenty of rest.
            </p>
            <img className="dima-x-ray" src="dima-x-ray.jpg" alt="x-ray of dimas arm"/>
            <img className="dima-cone" src="dima-cone.jpg" alt="dima in a cone"/>
            <img className="dima-rest" src="dima-rest.jpg" alt="dima resting on a pillow"/>
        </div>
        <div className="current-dima">
            <h2 className="current-dima-h2">Current Dima</h2>
            <p>Dima is living a healthy fulfilling life now. The injury
                does not affect her running around and jumping, she meows
                As happily as any cat could. I currently don't live with Dima
                But she is in good hands with my sister. She gets plenty of
                treats and outside time!
            </p>
            <img className="dima-laying-sideways" src="dima-laying-sideways.jpg" alt="dima laying sideways"/>
            <img className="dima-sunlight" src="dima-sunlight.jpg" alt="Dima laying in the sunlight"/>
            <img className="dima-stare" src="dima-stare.jpg" alt="dima staring at the camera"/>
        </div>
        </>
    )
}

export default Dima