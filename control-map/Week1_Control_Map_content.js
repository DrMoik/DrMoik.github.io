/*
 Four-layer content for the Control Map Explorer (English).
 Loaded by Week1_Control_Map_Explorer_EN.html. Edit the text, save, refresh the page.
 The four text fields (theory, gist, picture, memorize) use backticks ` ` so you can
 break them across as many lines as you like; line breaks are ignored on the page and
 you do NOT need to escape quotes. Each visual layer has its own media slot:
   media_picture   -> shown in the "Picture it" layer
   media_memorize  -> shown in the "Memory image" layer
 Put an image or video filename (relative to the HTML), e.g. "media_picture": "feedback.png".
*/
window.FOUR_LAYER = {
  "_readme": `Edit the four layers of every concept here, then just refresh the page. Each block has
    theory, gist, picture, memorize, and TWO media slots. "media_picture" attaches an image or
    video to the Picture It layer; "media_memorize" attaches one to the Memory image layer (same
    file, different files, or left empty). Put a filename relative to the HTML, e.g.
    "media_picture": "feedback.png" or "media_memorize": "clip.mp4". Supported video:
    mp4/webm/ogg/mov/m4v. The four text fields use backticks so you can break them across lines
    freely and need not escape quotes.`,
  "regions": {
    "core": {
      "name": "Core ideas",
      "theory": `The fundamental concepts that almost every control method is built on. They include
        feedback, which uses error to correct a system’s behavior; feedforward, which uses known
        information to act before errors appear; continuous- and discrete-time representations,
        which describe systems either as physical dynamics or as digital implementations; and
        time- and frequency-domain analysis, which helps us understand how a system responds,
        performs, and remains stable.`,
      "gist": `Measure and compare, then use the right mathematical approach to decide how to act.`,
      "picture": `A pile of LEGO bricks: small pieces at first, but every serious build depends on how the
        first ones click together.`,
      "media_picture": "",
      "memorize": `A row of LEGO robots on a sandwich line. The robots keep passing sandwiches backward
        (feedback), while another launches them forward (feedforward), and above them two clocks
        (time domain) swing (frequency): one analog (continuous), one blinking and digital
        (discrete).`,
      "media_memorize": "./Week1_Control_Map_Explorer_EN_files/CoreIdeas.png"
    },
      "model": {
        "name": "Modeling & Simulation",
        "theory": `Modeling means describing the plant with mathematics: physics-based equations,
          simplifying assumptions, linearization, transfer functions, state-space models, and
          parameter identification from data. Simulation means running that model to study behavior,
          test scenarios, compare candidate designs, and evaluate implementations before using the
          real system. Digital twins extend this idea by connecting models with real or simulated
          system data to create a richer virtual counterpart of the plant.`,
        "gist": `Build the math version, then test ideas on it before real implementation.`,
        "picture": `Before pilots train in a flight simulator, engineers describe the aircraft's behavior with
          mathematics so the virtual plane responds like the real one.`,
        "media_picture": "",
        "memorize": `A real F-16 flies beside a glowing equation-F-16 inside a transparent simulator box. The
          math jet gets tested first so the real jet stays safe.`,
        "media_memorize": "./Week1_Control_Map_Explorer_EN_files/ModelSim.png"
      },
    "analysis": {
      "name": "System Analysis",
      "theory": `Tools that answer whether a loop is stable, how fast it responds, and how much margin
        remains before instability — in time, s-plane, and frequency domains (Bode, Nyquist,
        Nichols, root locus, sensitivity).`,
      "gist": `Is it safe, and how hard can you push it?`,
      "picture": `A building inspection before you move in.`,
      "media_picture": "",
      "memorize": `A hard-hatted inspector tapping a bridge with a hammer and reading its tremor on a
        clipboard of plots.`,
      "media_memorize": ""
    },
    "linear": {
      "name": "Linear Control",
      "theory": `Classical linear controller synthesis: PID, lead/lag compensation, open-loop frequency
        shaping, and full-state feedback for MIMO linear plants.`,
      "gist": `Tune and shape a linear loop.`,
      "picture": `Adjusting the steering while the car still behaves predictably.`,
      "media_picture": "",
      "memorize": `A wall of tidy mixing-desk sliders being nudged on a car that always responds in
        straight, predictable lines.`,
      "media_memorize": ""
    },
    "optimal": {
      "name": "Optimal Control",
      "theory": `Formulate control as minimizing a cost functional subject to dynamics — LQR,
        Pontryagin's maximum principle, and Hamilton–Jacobi–Bellman equations.`,
      "gist": `Pick the best trade-off, not just a stable one.`,
      "picture": `Choosing the fuel-efficient route, not merely a safe one.`,
      "media_picture": "",
      "memorize": `A balance scale weighing a fuel can against a stopwatch, choosing the single cheapest
        route of all.`,
      "media_memorize": ""
    },
    "predict": {
      "name": "Predictive Control",
      "theory": `Receding-horizon control: at each sample, predict future trajectories, optimize control
        moves, and enforce constraints (MPC and robust variants).`,
      "gist": `Plan ahead, then replan every step.`,
      "picture": `Chess — think several moves, then update after each reply.`,
      "media_picture": "",
      "memorize": `A chess grandmaster mapping five moves on a glowing board, playing one, then sweeping
        the pieces to replan.`,
      "media_memorize": ""
    },
    "robust": {
      "name": "Robust Control",
      "theory": `Design controllers that maintain performance and stability despite bounded model
        uncertainty and disturbances — H∞ and structured μ-synthesis.`,
      "gist": `Assume the model is wrong; still stay safe.`,
      "picture": `Engineering for the worst storm, not the average Tuesday.`,
      "media_picture": "",
      "memorize": `A bunker-like house bolted to bedrock, built to shrug off the single worst hurricane on
        record.`,
      "media_memorize": ""
    },
    "adaptive": {
      "name": "Adaptive Control",
      "theory": `Controllers that update their parameters online as plant behaviour drifts — MRAC,
        extremum seeking, iterative learning, and gain scheduling.`,
      "gist": `The controller learns while it runs.`,
      "picture": `A thermostat that learns your house each season.`,
      "media_picture": "",
      "memorize": `A thermostat scribbling in a notebook, re-tuning its own dials a little more with every
        passing season.`,
      "media_memorize": ""
    },
    "nonlin": {
      "name": "Nonlinear Control",
      "theory": `Methods for plants that do not obey superposition: feedback linearization, dynamic
        inversion, sliding mode, backstepping, and bang-bang time-optimal control.`,
      "gist": `When straight-line math is not enough.`,
      "picture": `Steering a trailer that swings the wrong way first.`,
      "media_picture": "",
      "memorize": `A funhouse hall of warped mirrors where every straight push bends, and you must bend
        back to walk straight.`,
      "media_memorize": ""
    },
    "intel": {
      "name": "Intelligent Control",
      "theory": `Control via rules, learning, or search rather than explicit differential equations —
        fuzzy logic, reinforcement learning, and genetic algorithms.`,
      "gist": `Soft rules or learned policies.`,
      "picture": `Cooking by 'a pinch' and tasting until it is right.`,
      "media_picture": "",
      "memorize": `A robot chef in a granny's apron cooking by 'a pinch' and a puppy's treat-reward, no
        recipe in sight.`,
      "media_memorize": ""
    },
    "multi": {
      "name": "Multi-agent",
      "theory": `Coordination of many interacting agents through graph structure, leader–follower
        hierarchies, and emergent swarm rules.`,
      "gist": `Many agents, one coordinated motion.`,
      "picture": `Birds turning as a flock without a central conductor.`,
      "media_picture": "",
      "memorize": `A vast starling murmuration folding across the sky as one body, with no conductor
        anywhere in it.`,
      "media_memorize": ""
    },
    "plan": {
      "name": "Planning",
      "theory": `Geometric and combinatorial path planning: feasible trajectories under constraints,
        holonomic vs nonholonomic motion, and algorithms such as RRT and A*.`,
      "gist": `Find a path the plant can actually follow.`,
      "picture": `A maps app routing around closed roads.`,
      "media_picture": "",
      "memorize": `A glowing maps route threading a hedge-maze, curving around every wall and closed road
        to the pin.`,
      "media_memorize": ""
    },
    "estim": {
      "name": "State Estimation",
      "theory": `Infer hidden states and parameters from noisy measurements — observers, Kalman
        filtering, moving-horizon estimation, sensor fusion, and particle filters.`,
      "gist": `Guess the inside from noisy outside readings.`,
      "picture": `Knowing your speed from a shaky speedometer plus how the car feels.`,
      "media_picture": "",
      "memorize": `A detective pressing an ear to a locked wall, reconstructing the hidden room from only
        muffled, noisy sounds.`,
      "media_memorize": ""
    }
  },
  "terms": {
    "Feedback": {
      "region": "core",
      "theory": `Feedback is the mechanism by which a closed-loop control system is created: the measured
        output of a system is returned to the controller and used to influence the control
        input. This is usually done by comparing the measured output with a desired reference,
        generating an error signal, and using that error to modify the system's behavior so it
        moves closer to the desired response.`,
      "gist": `Measure the output so the controller can decide how to correct the input.`,
      "picture": `Walking in a straight line is only possible because we keep looking at where we are and
        making tiny corrections as we move. When vision is not available, a blind person can use
        a cane or guiding line to get that same kind of information. Without that return of
        information, we may keep walking, but we slowly drift away from the intended path.`,
      "media_picture": "",
      "memorize": `A pancake machine makes pancakes while a tiny chef measures each one with a huge vernier
        caliper. The number is sent backward on a conveyor belt into a giant mouth-shaped
        computer, which chews thoughtfully and then spits out three syrup-covered command cards:
        more batter, less batter, keep going.`,
      "media_memorize": "./Week1_Control_Map_Explorer_EN_files/Feedback.png"
    },
    "Feedforward": {
      "region": "core",
      "theory": `Feedforward is a control action generated from the desired input, known disturbances, or
        a model of the system, without using the measured output error as its main source of
        correction. It is commonly used as an open-loop compensating action that anticipates the
        input required to produce the desired response, often by approximating the inverse
        dynamics of the system.`,
      "gist": `Act in advance using what the controller already knows about the system.`,
      "picture": `In a rally race, the driver does not wait until the car is already in the curve to
        discover what to do. The copilot reads the pace notes before each turn: sharp left, long
        right, crest, braking zone. Using that information, the driver prepares the steering,
        speed, and braking in advance.`,
      "media_picture": "",
      "memorize": `A race car has a hotdog fortune-teller in the passenger seat holding a crystal ball
        shaped like the road ahead. Before the curve arrives, the crystal ball prints three
        glowing ketchup cards: brake, turn, accelerate. The cards slap themselves onto the
        steering wheel before the driver even blinks.`,
      "media_memorize": "./Week1_Control_Map_Explorer_EN_files/FeedForward.png"
    },
    "Continuous vs Discrete": {
      "region": "core",
      "theory": `A continuous-time system represents signals and dynamics as functions defined over a
        continuous time variable, commonly using differential equations or transfer functions in
        the Laplace domain. A discrete-time system represents signals and dynamics only at
        separated sampling instants, commonly using difference equations, state updates, or
        transfer functions in the z-domain. Discrete-time models are essential for digital
        implementation, but sampling can hide behavior between samples if the sampling period is
        not chosen appropriately.`,
      "gist": `Continuous time follows every instant; discrete time keeps selected instants.`,
      "picture": `Natural sight feels continuous because the road seems to move smoothly in front of us. 
      Now imagine an F1 driver using a 1 fps video feed: once per second, the driver receives a new image 
      of the track, but everything between those images is missing. To keep driving, the driver must guess 
      what happened between frames. Discrete time works like that: the system only receives selected moments, 
      so the lower the sampling rate, the more it must infer from incomplete information`,
      "media_picture": "./Week1_Control_Map_Explorer_EN_files/FPS.mp4",
      "memorize": `A completely transparent glass house lets you watch every tiny movement inside without
        interruption. Next door, a discreet spy in a black suit keeps snapping the shutters open
        and closed: open, shut, open, shut. Every time the shutters open, everyone inside has
        somehow changed position.`,
      "media_memorize": "./Week1_Control_Map_Explorer_EN_files/Discreet.png"
    },
    "C2D / D2C": {
      "region": "core",
      "theory": `C2D is the conversion of a continuous-time model or controller into a discrete-time
        representation for a chosen sampling period and implementation assumption, such as
        zero-order hold, first-order hold, impulse invariance, or Tustin approximation. D2C is
        the construction of a continuous-time representation from a discrete-time model, but
        this inverse process is not unique because many continuous-time behaviors can produce
        the same sampled data. In practice, C2D can discard information between samples, while
        D2C attempts to recover a plausible continuous model from incomplete sampled behavior.`,
      "gist": `C2D turns a flowing model into samples; D2C tries to rebuild a flowing model from
        samples.`,
      "picture": `A detailed portrait is reduced into a blocky pixel version. Later, someone tries to
        recover the original portrait from those blocks, but the missing brush strokes, soft
        edges, and tiny expressions have to be guessed.`,
      "media_picture": "./Week1_Control_Map_Explorer_EN_files/Obama.jpg",
      "memorize": `At a tiny village chapel, someone brings a blocky portrait printed the size of a postage
        stamp and asks for a heroic restoration. The volunteer restorer squints, paints with
        total confidence, and proudly unveils a face so magnificently wrong that the famous Ecce
        Homo restoration seems to nod from a folding chair in the corner.`,
      "media_memorize": "./Week1_Control_Map_Explorer_EN_files/EcceHomo.jpg"
    },
    "Time / Frequency Domains": {
      "region": "core",
      "theory": `Time-domain analysis studies how signals and system responses evolve as functions of
        time, including transient behavior, steady-state behavior, overshoot, settling time, and
        tracking error. Frequency-domain analysis studies how a system responds to sinusoidal
        inputs across frequency, commonly through magnitude, phase, bandwidth, resonance, and
        stability margins. These views describe the same system behavior from different
        mathematical perspectives.`,
      "gist": `Time shows how the response unfolds; frequency shows which rhythms the system amplifies
        or resists.`,
      "picture": `Watching ocean waves from a pier tells you how the water rises and falls moment by
        moment. Listening to the same ocean through a musical analyzer tells you which rhythms
        dominate the sound: slow swells, fast ripples, or repeated impacts.`,
      "media_picture": "",
      "memorize": `Inside a clock shop, every pendulum clock starts swinging at once. One clerk writes down
        the exact story of each swing on a huge roll of paper, while another clerk ignores the
        paper and tunes a wall of organ pipes until the room hums with the clocks' favorite
        notes.`,
      "media_memorize": ""
    },
    "First principles": {
      "region": "model",
      "theory": `Derive the model from conservation laws and constitutive relations (Newton's F=ma,
        Kirchhoff's laws, mass/energy/momentum balances), producing ODEs/PDEs whose parameters
        carry direct physical meaning.`,
      "gist": `Build a model from physical laws (F=ma, Kirchhoff).`,
      "picture": `Writing the rules of the game from scratch.`,
      "media_picture": "",
      "memorize": `A bearded engineer at a blank chalkboard derives an entire engine from a falling apple
        and a sparking lemon, refusing to glance at any manual.`,
      "media_memorize": ""
    },
    "Linearization": {
      "region": "model",
      "theory": `First-order Taylor expansion about an equilibrium (x*,u*): δẋ≈A·δx+B·δu with A=∂f/∂x,
        B=∂f/∂u evaluated at the operating point. Valid for small deviations; it is the bridge
        that lets LTI tools analyze nonlinear plants.`,
      "gist": `Approximate a curved system by a straight line near an operating point.`,
      "picture": `A flat map of a small city on a round Earth.`,
      "media_picture": "",
      "memorize": `An ant on a colossal spinning globe spreads a tiny picnic blanket and insists the curved
        ground beneath it is a perfectly flat tabletop.`,
      "media_memorize": ""
    },
    "Transfer functions": {
      "region": "model",
      "theory": `For an LTI system at zero initial conditions, G(s)=Y(s)/U(s)=L{output}/L{input}.
        Denominator roots (poles) set the natural dynamics and stability; numerator roots
        (zeros) shape how modes appear in the response.`,
      "gist": `Input-output ratio of a system in the Laplace domain, G(s).`,
      "picture": `A printing press: feed in one page, the same copy always comes out the other end.`,
      "media_picture": "",
      "memorize": `A brass machine swallows one blue button and always drops out one red gumball, every
        single time, with a satisfying clunk and a puff of steam.`,
      "media_memorize": ""
    },
    "Block diagrams": {
      "region": "model",
      "theory": `A graphical algebra of signal flow: series blocks multiply, parallel paths add, and a
        feedback loop reduces to G/(1+GH). It lets you collapse a complex interconnection into
        one equivalent transfer function.`,
      "gist": `Draw a system as connected blocks and signal arrows.`,
      "picture": `A subway map: boxes joined by lines until the whole trip reads as one route.`,
      "media_picture": "",
      "memorize": `A model-train hobbyist keeps soldering little boxcars and arrow-shaped tracks together
        on a table until the whole tangled layout folds into one single looping rail.`,
      "media_memorize": ""
    },
    "System ID": {
      "region": "model",
      "theory": `Build a model from measured I/O data {u(k),y(k)} rather than physics — fitting
        transfer-function or state-space (A,B,C,D) parameters by least-squares,
        prediction-error, or subspace methods, then validating on data withheld from the fit.`,
      "gist": `Build a model from measured data instead of physics.`,
      "picture": `Learning a recipe by tasting, not reading.`,
      "media_picture": "",
      "memorize": `A blindfolded chef tastes spoonful after spoonful of a mystery stew, scribbling a recipe
        on the wall in ketchup, never once peeking into the pot.`,
      "media_memorize": ""
    },
    "Linear state space": {
      "region": "model",
      "theory": `The first-order vector model ẋ=Ax+Bu, y=Cx+Du captures n internal states. Eigenvalues of
        A are the system poles, and the form extends naturally to multi-input/multi-output and
        time-varying systems where transfer functions struggle.`,
      "gist": `Describe a system by its internal states: ẋ=Ax+Bu, y=Cx+Du.`,
      "picture": `Tracking a car by position AND velocity, not just where it stops.`,
      "media_picture": "",
      "memorize": `Four brass dials engraved A, B, C, and D sit on a submarine console, and turning them
        swings a whole wall of needles in perfect lockstep.`,
      "media_memorize": ""
    },
    "Nonlinear state space": {
      "region": "model",
      "theory": `ẋ=f(x,u), y=h(x,u) with f nonlinear. Superposition fails, so analysis shifts to
        equilibria, local linearization, phase-plane geometry, and Lyapunov methods rather than
        transfer functions.`,
      "gist": `State-space with nonlinear dynamics: dx/dt=f(x,u).`,
      "picture": `A pendulum that behaves differently when it swings wide.`,
      "media_picture": "",
      "memorize": `A playground swing behaves like a gentle kitten at tiny pushes, but shove it high and it
        transforms mid-arc into a roaring, looping dragon.`,
      "media_memorize": ""
    },
    "Minimum realizations": {
      "region": "model",
      "theory": `A state-space (A,B,C,D) of the least order n that reproduces a given transfer function.
        It exists iff the realization is both controllable and observable — equivalently, no
        pole–zero cancellations remain.`,
      "gist": `The smallest state-space model that reproduces a transfer function.`,
      "picture": `The shortest set of instructions that still works.`,
      "media_picture": "",
      "memorize": `A traveler keeps hurling duplicate socks out of a bulging suitcase until only the
        tiniest carry-on remains that somehow still holds a complete wardrobe.`,
      "media_memorize": ""
    },
    "Simulation": {
      "region": "model",
      "theory": `Predict behaviour by numerically integrating the model (e.g. Runge–Kutta for ẋ=f(x,u))
        or iterating x[k+1]=f_d(x[k],u[k]); solver step size and stiffness set the accuracy and
        numerical stability of the result, independent of the plant's own stability.`,
      "gist": `Run the model on a computer to predict behavior.`,
      "picture": `A dress rehearsal on a closed stage before opening night.`,
      "media_picture": "",
      "memorize": `A stunt dummy in a bolted-down toy rocket 'crashes' a hundred times into a foam wall,
        dusting itself off and grinning each time, long before the real launch pad opens.`,
      "media_memorize": ""
    },
    "Hybrid system": {
      "region": "model",
      "theory": `Dynamics that combine continuous flow ẋ=f(x) with discrete jumps x⁺=g(x) triggered when
        the state hits a guard. Modeled as automata with mode-dependent ODEs; switching can
        create behaviour neither mode shows alone.`,
      "gist": `Mixes continuous dynamics with discrete jumps or modes.`,
      "picture": `A bouncing ball: smooth flight, sudden bounce.`,
      "media_picture": "",
      "memorize": `A rubber ball glides in long, dreamy slow-motion arcs, then SMACKS the floor with a
        cartoon spring-sound, over and over, gliding and smacking.`,
      "media_memorize": ""
    },
    "Step / Impulse / Sine inputs": {
      "region": "model",
      "theory": `Canonical test signals: the step reveals transient + steady-state metrics (rise,
        settling, overshoot, steady-state error); the impulse yields the impulse response h(t) —
        the system's signature; sinusoids trace the frequency response G(jω).`,
      "gist": `Standard test inputs used to probe how a system responds.`,
      "picture": `Pushing a swing once hard, then one sharp shove, then in rhythm, to see how it moves.`,
      "media_picture": "",
      "memorize": `A bored monk strikes one giant temple bell three ways - a steady shove, a single sharp
        flick, and a rhythmic tickle - and each makes it ring a different color.`,
      "media_memorize": ""
    },
    "Stability": {
      "region": "analysis",
      "theory": `For an LTI loop, BIBO/asymptotic stability holds iff every closed-loop pole lies in the
        open left half-plane Re(s)<0 (or inside the unit circle |z|<1 in discrete time).
        Routh–Hurwitz tests this from the characteristic-polynomial coefficients without solving
        for the roots.`,
      "gist": `Does the system settle, or blow up?`,
      "picture": `A marble in a bowl (stable) vs on a dome (unstable).`,
      "media_picture": "",
      "memorize": `A wooden spinning top settles upright into a saucer of milk and dozes, while its twin on
        the next table spins faster and faster, screeching, until it bursts into a shower of
        splinters.`,
      "media_memorize": ""
    },
    "Performance": {
      "region": "analysis",
      "theory": `Quantified by transient and steady-state specs — rise time, peak overshoot %, settling
        time, steady-state error — which map directly to the dominant poles' damping ratio ζ and
        natural frequency ω_n.`,
      "gist": `How fast and accurately it responds (overshoot, settling time).`,
      "picture": `A car's 0-60 time and how smoothly it stops.`,
      "media_picture": "",
      "memorize": `A greyhound built of brass gears sprints down a hotel hallway, skids to a halt on a
        dinner plate, and a white-gloved judge times it with an hourglass while grading the
        landing.`,
      "media_memorize": ""
    },
    "Margins (gain / phase)": {
      "region": "analysis",
      "theory": `Read from the open-loop L(jω). Gain margin GM=1/|L(jω_pc)| at the phase-crossover
        frequency ω_pc where ∠L=−180°; phase margin PM=180°+∠L(jω_gc) at the gain-crossover
        frequency ω_gc where |L|=1. Both measure distance from the −1 point; small margins mean
        a fragile loop.`,
      "gist": `How much extra gain or delay before the loop goes unstable.`,
      "picture": `How close to the cliff edge you're driving.`,
      "media_picture": "",
      "memorize": `A tuxedoed waiter balances forty soup bowls while his slipper hovers exactly one
        breadcrumb's width from the lip of a marble staircase, beads of sweat frozen midair.`,
      "media_memorize": ""
    },
    "Controllability & Observability": {
      "region": "analysis",
      "theory": `Controllability — rank[B AB … Aⁿ⁻¹B]=n — means the inputs can steer the state anywhere;
        observability — rank[Cᵀ (CA)ᵀ … (CAⁿ⁻¹)ᵀ]=n — means the outputs determine the full
        state. They are the duals that make pole placement and observer design possible.`,
      "gist": `Can you steer every state, and can you infer them from outputs?`,
      "picture": `Can you reach every room, and can you see into them?`,
      "media_picture": "",
      "memorize": `A puppeteer in a lab coat ties a string to every limb of a marionette and wears enormous
        X-ray goggles, watching its painted wooden heart tick as it tap-dances.`,
      "media_memorize": ""
    },
    "Root locus": {
      "region": "analysis",
      "theory": `The locus of closed-loop poles, i.e. roots of 1+K·L(s)=0, as the scalar gain K sweeps
        0→∞. Branches start at open-loop poles and end at open-loop zeros (or infinity), tracing
        how K trades damping and speed against eventual instability.`,
      "gist": `How closed-loop poles move as a gain is varied.`,
      "picture": `Watching where the tuning knob sends the system's character.`,
      "media_picture": "",
      "memorize": `A child turns a giant brass crank on the wall, and as it tightens, droplets of ink crawl
        out along curving silver rails across a frosted window toward little drilled holes.`,
      "media_memorize": ""
    },
    "Pole-zero plot": {
      "region": "analysis",
      "theory": `The roots of G(s) drawn in the complex plane: a pole's real part sets decay/growth rate,
        its imaginary part the oscillation frequency; nearby zeros can cancel or reshape a
        mode's contribution.`,
      "gist": `Poles and zeros on the complex plane that shape the response.`,
      "picture": `A scatter of freckles whose exact pattern belongs to just one face.`,
      "media_picture": "",
      "memorize": `An astronomer scatters black dominoes and ring-shaped donuts across a glowing glass
        table, leans in, and reads the pattern like a private constellation, gasping.`,
      "media_memorize": ""
    },
    "Bode plots": {
      "region": "analysis",
      "theory": `Two log-scale curves of the open loop: magnitude 20·log₁₀|L(jω)| in dB and phase ∠L(jω)
        versus ω. They expose bandwidth, the gain/phase at crossover (hence the margins), and
        the slopes that govern disturbance rejection and noise sensitivity.`,
      "gist": `Gain and phase plotted versus frequency.`,
      "picture": `A graphic equalizer showing response per pitch.`,
      "media_picture": "",
      "memorize": `An octopus in a bow tie plays two huge accordions at once on a subway platform, wheezing
        them wide for the low rumbles and pinching them shut for the squeaks.`,
      "media_memorize": ""
    },
    "Nyquist": {
      "region": "analysis",
      "theory": `Polar plot of L(jω) for ω:−∞→∞ in the complex plane. The Nyquist criterion N=Z−P
        (encirclements of −1 equal unstable closed-loop poles minus open-loop RHP poles)
        certifies stability even for delays and nonminimum-phase plants; the closest approach to
        −1 measures robustness.`,
      "gist": `A frequency plot that reveals stability by how it encircles -1.`,
      "picture": `A loop-the-loop test around a danger point.`,
      "media_picture": "",
      "memorize": `A unicyclist circles endlessly around a single orange traffic cone in a dim parking
        garage while a wall-mounted metronome clicks once for every lap.`,
      "media_memorize": ""
    },
    "Nichols chart": {
      "region": "analysis",
      "theory": `Plots open-loop gain (dB) against open-loop phase on one grid, overlaid with constant
        closed-loop magnitude/phase contours. Shaping the L-curve on this chart lets you set the
        resonant peak M_r and the margins simultaneously by eye.`,
      "gist": `Gain vs phase on one chart for loop design.`,
      "picture": `Bode's two plots merged into one map.`,
      "media_picture": "",
      "memorize": `A tiny technician rides a swiveling radar dish bolted to a wheelbarrow, nudging a
        joystick to tilt and aim the dish at a glowing bullseye painted on the ceiling.`,
      "media_memorize": ""
    },
    "Nonminimum phase": {
      "region": "analysis",
      "theory": `Systems with right-half-plane zeros or pure transport delay carry more phase lag than
        their magnitude alone implies; RHP zeros produce an initial response in the wrong
        direction. This fundamentally caps achievable bandwidth — gain cannot simply be raised.`,
      "gist": `Systems that first respond the wrong way.`,
      "picture": `Backing up a trailer: it swings out before it goes in.`,
      "media_picture": "",
      "memorize": `A man in a bowler hat shoves at a revolving door, but each forward push first hurls him
        a step backward, hat popping off, before the door grudgingly spits him outside.`,
      "media_memorize": ""
    },
    "Phase plane": {
      "region": "analysis",
      "theory": `For second-order systems, plotting trajectories in the (x,ẋ) state plane reveals
        equilibria, limit cycles, and separatrices — global nonlinear behaviour that no single
        time-history plot exposes.`,
      "gist": `Plot states against each other to see trajectories.`,
      "picture": `A hiking map whose every trail spirals down toward the same valley floor.`,
      "media_picture": "",
      "memorize": `A glowing pearl circles the inside of a giant teacup, spiraling tighter and tighter
        toward a single sugar cube resting at the bottom, leaving a trail of light.`,
      "media_memorize": ""
    },
    "Lyapunov stability": {
      "region": "analysis",
      "theory": `Prove stability without solving the ODE: find a scalar V(x)>0 with V̇(x)=∇V·f(x)≤0 in a
        neighbourhood of an equilibrium. A decreasing energy-like V certifies stability, and
        V̇<0 gives asymptotic stability.`,
      "gist": `Prove stability with an 'energy' that always decreases.`,
      "picture": `Water always flowing downhill to rest.`,
      "media_picture": "",
      "memorize": `A trickle of glowing honey always seeps downhill into the lowest crack of a boulder and
        never once climbs back uphill, no matter how the rock is tilted.`,
      "media_memorize": ""
    },
    "Passivity": {
      "region": "analysis",
      "theory": `An input-output energy property: the system only stores or dissipates energy, never
        creates it, so ∫₀ᵀ u·y dt ≥ stored energy. Negative-feedback interconnections of passive
        systems remain stable — a powerful nonlinear design tool.`,
      "gist": `Systems that never generate energy stay well-behaved.`,
      "picture": `A circuit of only resistors, never amplifying.`,
      "media_picture": "",
      "memorize": `A sealed glass terrarium of ferns and pebbles warms gently in the sun and cools at
        night, but it has no plug, no battery, and refuses every wire offered to it.`,
      "media_memorize": ""
    },
    "Sensitivity": {
      "region": "analysis",
      "theory": `S(s)=1/(1+L(s)) maps reference/disturbance to error; complementary sensitivity
        T(s)=L/(1+L) maps reference to output, with S+T=1 always. Bode's integral (the waterbed
        effect) conserves ∫ln|S|dω, so suppressing S in one band raises it in another.`,
      "gist": `How much disturbances and model errors affect the output.`,
      "picture": `How jumpy your steering is to potholes.`,
      "media_picture": "",
      "memorize": `A see-through air mattress packed with goldfish: a toddler presses the left side and
        every goldfish squishes to the right, glaring through the plastic in unison.`,
      "media_memorize": ""
    },
    "PID": {
      "region": "linear",
      "theory": `Parallel control law u(t)=K_p·e + K_i·∫e dt + K_d·de/dt: proportional acts on present
        error, integral removes steady-state error by accumulating the past, derivative adds
        damping by anticipating change. The derivative term is usually filtered to limit noise
        amplification.`,
      "gist": `Combine present (P), past (I) and predicted (D) error to correct.`,
      "picture": `Steering by current drift, accumulated drift, and how fast it's drifting.`,
      "media_picture": "",
      "memorize": `A taxi driver with three arms grips the wheel: one steadies it now, one scribbles every
        past swerve into a ledger, and one twitches at the faintest hint of a coming wobble.`,
      "media_memorize": ""
    },
    "Lead-lag": {
      "region": "linear",
      "theory": `First-order compensators C(s)=K(s+z)/(s+p). A lead (z<p) adds phase near crossover to
        boost speed and margin; a lag (z>p) lifts low-frequency gain to cut steady-state error.
        They are the s-plane shaping primitives behind classical design.`,
      "gist": `Simple compensators that add phase (speed) or cut steady-state error.`,
      "picture": `Tuning a guitar string slightly sharp or flat.`,
      "media_picture": "",
      "memorize": `A luthier tweaks two pegs on a glowing violin, twisting one so the note leaps forward
        eagerly and the other so it sags warm and late.`,
      "media_memorize": ""
    },
    "Loop shaping": {
      "region": "linear",
      "theory": `Directly mould the open-loop L(jω) — high gain at low frequency for tracking and
        disturbance rejection, a controlled crossover slope (≈−20 dB/dec) for margins, low gain
        at high frequency for noise — so that S and T meet their specifications.`,
      "gist": `Design the open-loop frequency response to get the behavior you want.`,
      "picture": `Bending a garden hose into just the arc that waters the whole bed.`,
      "media_picture": "",
      "memorize": `A glassblower draws a molten ribbon into a long curving ramp, blowing it steep where it
        must plunge and gentle through the bends until it hums at the right pitch.`,
      "media_memorize": ""
    },
    "Full state feedback": {
      "region": "linear",
      "theory": `Control law u=−Kx using all state variables (measured or estimated). Pole placement sets
        K to assign the closed-loop eigenvalues of (A−BK); LQR chooses K to minimize a quadratic
        cost. Requires controllability.`,
      "gist": `Feed back all states through a gain matrix K.`,
      "picture": `Steering using every gauge on the dashboard, not just speed.`,
      "media_picture": "",
      "memorize": `A pilot with a hand wired to every gauge on the dashboard at once flies through dense
        fog, her ten gloved fingers each twitching to a different trembling needle.`,
      "media_memorize": ""
    },
    "LQR": {
      "region": "optimal",
      "theory": `For ẋ=Ax+Bu, minimize J=∫(xᵀQx+uᵀRu)dt. The optimal control is the linear law u=−Kx with
        K=R⁻¹BᵀP, where P solves the algebraic Riccati equation AᵀP+PA−PBR⁻¹BᵀP+Q=0.`,
      "gist": `Pick feedback that minimizes a cost balancing effort vs error.`,
      "picture": `The most fuel-efficient way to hold your course.`,
      "media_picture": "",
      "memorize": `A drowsy panda nudges a bamboo stalk and a stone melon along a pole, inching them until
        the whole pole rests at its lightest, comfiest tilt, then naps.`,
      "media_memorize": ""
    },
    "Pontryagin's maximum principle": {
      "region": "optimal",
      "theory": `Necessary conditions for an optimal trajectory: introduce a costate λ and Hamiltonian
        H=L+λᵀf; the optimal input minimizes H pointwise subject to ẋ=∂H/∂λ and λ̇=−∂H/∂x. It
        cleanly handles hard input constraints.`,
      "gist": `Math conditions that the best possible control must satisfy.`,
      "picture": `The hidden checklist a perfect heist must tick off at every step.`,
      "media_picture": "",
      "memorize": `A stadium referee floats above the field clutching a glowing rulebook, freezing the game
        every instant to check that the perfect play obeys each printed line.`,
      "media_memorize": ""
    },
    "Hamilton-Jacobi-Bellman": {
      "region": "optimal",
      "theory": `The dynamic-programming PDE for the optimal cost-to-go V(x): min_u[L(x,u)+∇Vᵀf(x,u)]=0.
        Its solution gives the optimal feedback for every state; LQR is its linear-quadratic
        special case.`,
      "gist": `A value-based equation for optimal control over time.`,
      "picture": `A GPS computing the best route from every point.`,
      "media_picture": "",
      "memorize": `A city where every single street corner glows with a painted arrow, all of them secretly
        pointing along the cheapest path to one golden front door.`,
      "media_memorize": ""
    },
    "Model predictive control (MPC)": {
      "region": "predict",
      "theory": `At each sample, solve a finite-horizon open-loop optimization (min Σ‖x−x_ref‖²_Q+‖u‖²_R
        subject to the model and constraints), apply only the first control move, then re-solve
        at the next sample — the receding-horizon principle.`,
      "gist": `At each step, simulate the future, optimize the next move, respect constraints.`,
      "picture": `A chess player planning several moves ahead, then replanning.`,
      "media_picture": "",
      "memorize": `A sci-fi general projects five glowing battle-moves over a sand table, enacts only the
        first, then wipes the sand smooth and conjures five fresh moves.`,
      "media_memorize": ""
    },
    "Linear MPC": {
      "region": "predict",
      "theory": `MPC with linear dynamics and linear (in)equality constraints, which makes the per-step
        problem a convex quadratic program solvable quickly and reliably — the industrial
        workhorse for constrained multivariable control.`,
      "gist": `MPC on a linear model: fast and common in industry.`,
      "picture": `Planning ahead, but on a simple straight-line map.`,
      "media_picture": "",
      "memorize": `A marble-run built entirely of dead-straight rulers: a steel ball clacks instantly from
        gate to gate along the grid, never once curving.`,
      "media_memorize": ""
    },
    "Robust MPC": {
      "region": "predict",
      "theory": `MPC that explicitly accounts for bounded model uncertainty and disturbances, optimizing
        over worst cases or constraint-tightening tubes so that constraints stay satisfied for
        every admissible realization.`,
      "gist": `MPC that stays safe despite model uncertainty.`,
      "picture": `Planning ahead while assuming the map might be wrong.`,
      "media_picture": "",
      "memorize": `A cartographer calmly draws a route across a map spread on a raft, fully expecting the
        raft to lurch and tilt under his elbows at any second.`,
      "media_memorize": ""
    },
    "H-infinity": {
      "region": "robust",
      "theory": `Synthesize a controller K that minimizes the H∞ norm — the worst-case gain, sup over ω
        of the largest singular value — of a weighted closed-loop transfer matrix, guaranteeing
        performance against all bounded-energy disturbances.`,
      "gist": `Design for the worst-case disturbance and uncertainty.`,
      "picture": `Building for the worst storm, not the average day.`,
      "media_picture": "",
      "memorize": `A turtle clamps into a titanium shell as a lab fires its single most monstrous
        cannonball straight at the shell, never wasting a shot on light pebbles.`,
      "media_memorize": ""
    },
    "Mu synthesis": {
      "region": "robust",
      "theory": `Extends H∞ to structured uncertainty via the structured singular value μ. D–K iteration
        alternately designs an H∞ controller and fits scaling matrices, yielding designs robust
        to specific modeled uncertainty blocks rather than one lump.`,
      "gist": `Push robust design further using structured uncertainty.`,
      "picture": `Worst-case design that knows exactly where the weak spots are.`,
      "media_picture": "",
      "memorize": `A bomb-squad robot unrolls a blueprint dotted with red circles marking the three weakest
        rivets, then welds armor onto only those exact spots.`,
      "media_memorize": ""
    },
    "Model reference adaptive control (MRAC)": {
      "region": "adaptive",
      "theory": `Adjust controller parameters online so the closed loop tracks a chosen reference model.
        Adaptation laws — the MIT rule or, more safely, Lyapunov-based updates — drive the
        model-following error to zero as the plant drifts.`,
      "gist": `Tune the controller online so the system matches a desired model.`,
      "picture": `A thermostat that learns your house over time.`,
      "media_picture": "",
      "memorize": `A robot butler keeps a framed sketch of a 'perfect day' pinned to the wall and re-tunes
        its own gears every night until the household finally runs exactly like the sketch.`,
      "media_memorize": ""
    },
    "Extremum-seeking": {
      "region": "adaptive",
      "theory": `Model-free real-time optimization: inject a small periodic dither, correlate it with the
        measured objective to estimate the local gradient, and move the input uphill toward the
        optimal operating point.`,
      "gist": `Wiggle the input to climb toward the best operating point.`,
      "picture": `Feeling around in the dark for the brightest spot.`,
      "media_picture": "",
      "memorize": `A blindfolded hiker shimmies left and right on a foggy hill, sniffing the air, and
        inches steadily toward the warm spot where the sun feels brightest.`,
      "media_memorize": ""
    },
    "Iterative learning control": {
      "region": "adaptive",
      "theory": `For a task repeated over a fixed interval, update the next trial's input from this
        trial's error, u_{k+1}=u_k+L·e_k, so tracking error shrinks across repetitions even
        without a precise model.`,
      "gist": `Improve a repeated task a little more each cycle.`,
      "picture": `A gymnast refining the same routine each attempt.`,
      "media_picture": "",
      "memorize": `A gymnast rewinds yesterday's vault on a tiny projector, circles one flaw in red marker,
        and shaves off exactly that single mistake on each new run.`,
      "media_memorize": ""
    },
    "Gain scheduling": {
      "region": "adaptive",
      "theory": `Design linear controllers at several operating points, then interpolate or switch their
        gains using a measured scheduling variable. It is the classic way to control a nonlinear
        plant with a family of linear designs.`,
      "gist": `Switch controller gains depending on the operating condition.`,
      "picture": `Different gears for different speeds.`,
      "media_picture": "",
      "memorize": `A bus driver slaps a giant gear lever into a different colored slot for each road -
        mountain, highway, alley - each gear pre-locked and waiting.`,
      "media_memorize": ""
    },
    "Feedback linearization": {
      "region": "nonlin",
      "theory": `Choose u=α(x)+β(x)v to algebraically cancel the plant's nonlinearities, leaving an
        exactly linear input-output map (a chain of integrators) for the new input v, to which
        linear design is applied. Demands an accurate model.`,
      "gist": `Cancel the nonlinearities so the system behaves linearly.`,
      "picture": `Undoing a curve with an equal-and-opposite bend.`,
      "media_picture": "",
      "memorize": `A blacksmith hammers a wildly warped iron bar with an exactly opposite warp until,
        clang, it lies impossibly flat on the anvil and gleams.`,
      "media_memorize": ""
    },
    "Dynamic inversion": {
      "region": "nonlin",
      "theory": `Command the plant by inverting its dynamics — solve the model for the input that
        produces a desired output derivative — closely related to feedback linearization and
        common in flight control.`,
      "gist": `Command the system by inverting its model.`,
      "picture": `Pressing exactly the keys that produce the tune you want.`,
      "media_picture": "",
      "memorize": `A locksmith studies the precise wiggle a key must trace through a lock, then files a
        fresh key tooth by tooth to produce exactly that motion.`,
      "media_memorize": ""
    },
    "Sliding mode": {
      "region": "nonlin",
      "theory": `Define a sliding surface s(x)=0 and a switching control that forces s→0 in finite time,
        then keeps the state on it. Strongly robust to matched uncertainty, at the cost of
        high-frequency chattering unless smoothed.`,
      "gist": `Force the state onto a surface and slide it to the goal; very robust.`,
      "picture": `A ball rolling along a guide rail.`,
      "media_picture": "",
      "memorize": `A bead snaps onto a taut zip-line and buzzes furiously, vibrating in a blur as it
        rockets dead-straight along the cable to the post at the far end.`,
      "media_memorize": ""
    },
    "Backstepping": {
      "region": "nonlin",
      "theory": `A recursive Lyapunov design for strict-feedback (cascaded) systems: stabilize an inner
        subsystem with a virtual control, then step back stage by stage, building a control law
        and Lyapunov function together up to the real input.`,
      "gist": `Build a controller layer by layer for cascaded dynamics.`,
      "picture": `Stabilizing a stack of blocks from the bottom up.`,
      "media_picture": "",
      "memorize": `A raccoon stacks teetering wooden crates from the ground up, bracing each one
        rock-steady before daring to hoist the next onto the pile.`,
      "media_memorize": ""
    },
    "Bang-bang": {
      "region": "nonlin",
      "theory": `Time-optimal control of input-saturated systems switches between the extreme actuator
        limits. Pontryagin's principle shows that, for such problems, the optimal input is
        bang-bang with a finite number of switches.`,
      "gist": `Switch fully on/off for time-optimal control.`,
      "picture": `Flooring the gas, then slamming the brakes.`,
      "media_picture": "",
      "memorize": `A cartoon mouse leaps onto a giant seesaw lever, slamming it fully UP and then fully
        DOWN, never once letting it rest level in the middle.`,
      "media_memorize": ""
    },
    "Fuzzy control": {
      "region": "intel",
      "theory": `Encode expert knowledge as linguistic variables and membership functions: fuzzify the
        crisp inputs, apply IF–THEN inference rules, then defuzzify to a crisp action —
        achieving control without an explicit dynamic model.`,
      "gist": `Use rules with soft categories (warm, fast) instead of exact math.`,
      "picture": `Cooking by 'a pinch' and 'until golden'.`,
      "media_picture": "",
      "memorize": `A wizard brews a potion by tossing in 'a glug of bravery' and stirring 'until it
        giggles,' never measuring a single drop.`,
      "media_memorize": ""
    },
    "Reinforcement learning": {
      "region": "intel",
      "theory": `Learn a policy π(a|s) that maximizes expected cumulative reward through interaction with
        the system. Value-based (Q-learning) or policy-gradient methods approximate the optimal
        controller by trial and error.`,
      "gist": `Learn control by trial-and-error rewards.`,
      "picture": `Training a dog with treats.`,
      "media_picture": "",
      "memorize": `A street magician's monkey tries gesture after gesture, and whichever one makes coins
        rain into the hat gets repeated faster and faster.`,
      "media_memorize": ""
    },
    "Genetic algorithms": {
      "region": "intel",
      "theory": `Population-based stochastic search: encode candidate controllers as genomes, then
        iterate selection, crossover, and mutation to evolve higher-fitness designs over
        successive generations — useful when gradients are unavailable.`,
      "gist": `Evolve good controllers by mutation and selection.`,
      "picture": `Breeding the best-performing designs.`,
      "media_picture": "",
      "memorize": `In a moonlit barn, little clockwork creatures court, mate, and mutate; each new litter
        out-tinkers its parents, and the clumsy runts are quietly retired.`,
      "media_memorize": ""
    },
    "Graph theoretic control": {
      "region": "multi",
      "theory": `Model agents as nodes and communication links as edges; the graph Laplacian's spectrum
        governs consensus and formation, with the algebraic connectivity λ₂ setting how fast the
        group agrees.`,
      "gist": `Coordinate many agents using their connection network.`,
      "picture": `A rumor spreading through a friend network.`,
      "media_picture": "",
      "memorize": `A neighborhood of treehouses linked only by string-and-tin-can phones passes a single
        juicy whisper hut to hut until, by dawn, everyone is humming the same tune.`,
      "media_memorize": ""
    },
    "Leader-follower": {
      "region": "multi",
      "theory": `A designated leader sets the reference trajectory while followers use local relative
        measurements to track it, achieving coordinated group motion with minimal global
        information.`,
      "gist": `Followers track a designated leader's motion.`,
      "picture": `Ducklings trailing the mother duck.`,
      "media_picture": "",
      "memorize": `A conga line of wind-up penguins waddles single file, each one locked precisely into the
        icy footprints stamped by the big penguin up front.`,
      "media_memorize": ""
    },
    "Swarm": {
      "region": "multi",
      "theory": `Decentralized control where each agent obeys simple local rules — separation, alignment,
        cohesion — and coordinated global behaviour emerges with no central coordinator.`,
      "gist": `Simple local rules create coordinated group behavior.`,
      "picture": `A flock of birds turning as one.`,
      "media_picture": "",
      "memorize": `A vast school of silver sardines pours through the sea as one shimmering ribbon,
        twisting as a single body, though each fish only ever eyes its nearest few.`,
      "media_memorize": ""
    },
    "Planning": {
      "region": "plan",
      "theory": `Compute a feasible (ideally optimal) trajectory from start to goal that respects
        kinematics, dynamics, and obstacles, bridging high-level goals to the low-level
        reference a controller then tracks.`,
      "gist": `Compute a feasible path or trajectory to a goal.`,
      "picture": `A maps app routing around obstacles.`,
      "media_picture": "",
      "memorize": `A spider in a hard hat spins one glowing thread across a cluttered model town, looping
        neatly around every toppled chair and toy fence to reach a lone thumbtack.`,
      "media_memorize": ""
    },
    "RRT": {
      "region": "plan",
      "theory": `Rapidly-exploring Random Tree: incrementally sample the configuration space and extend a
        tree toward each sample, efficiently finding feasible paths in high dimensions; the RRT*
        variant adds asymptotic optimality.`,
      "gist": `Grow a random tree through free space to find a path.`,
      "picture": `Exploring a maze by throwing out feelers.`,
      "media_picture": "",
      "memorize": `A potted vine on a windowsill shoots wild tendrils in every random direction into a dark
        dollhouse maze until one finally curls around the exit doorknob.`,
      "media_memorize": ""
    },
    "A*": {
      "region": "plan",
      "theory": `Graph search that expands nodes in order of f(n)=g(n)+h(n) — cost-so-far plus an
        admissible heuristic estimate to the goal. It is optimal and complete whenever the
        heuristic never overestimates the true remaining cost.`,
      "gist": `Shortest-path search guided by a smart heuristic.`,
      "picture": `A maps app that guesses which way is closer.`,
      "media_picture": "",
      "memorize": `A treasure hunter crosses a swamp choosing each stepping-stone by counting the stones
        already behind him plus a brass compass humming the distance still ahead.`,
      "media_memorize": ""
    },
    "Constraints": {
      "region": "plan",
      "theory": `Hard limits the solution must respect — actuator saturation, state bounds, obstacle
        avoidance — expressed as equalities/inequalities and enforced inside the optimizer or
        planner rather than fixed up afterward.`,
      "gist": `Limits the plan must respect (walls, max speed, actuator limits).`,
      "picture": `Staying on the road and under the speed limit.`,
      "media_picture": "",
      "memorize": `A tightrope walker is hemmed in by tall guardrails on both sides of the rope and a heavy
        harness that won't let him rise past a marked height, firmly penned in his lane.`,
      "media_memorize": ""
    },
    "Holonomic / nonholonomic": {
      "region": "plan",
      "theory": `Holonomic constraints restrict only configuration and are integrable; nonholonomic
        constraints restrict velocities non-integrably (e.g. a wheel rolling without slipping),
        so the reachable directions of motion are locally limited.`,
      "gist": `Whether motion is freely constrained (a car can't slide sideways).`,
      "picture": `A shopping cart vs a chess king.`,
      "media_picture": "",
      "memorize": `A supermarket trolley glides sideways, diagonally, any way it pleases across a ballroom,
        while beside it a toy car can only ever nose forward, never skate sideways.`,
      "media_memorize": ""
    },
    "State estimation": {
      "region": "estim",
      "theory": `Reconstruct the internal state x̂(t) from inputs u and noisy outputs y when x is not
        directly measured, by combining a model prediction with measurement corrections to
        minimize estimation-error covariance (or a windowed cost).`,
      "gist": `Infer hidden internal states from noisy sensors.`,
      "picture": `Guessing a car's true speed from a shaky speedometer.`,
      "media_picture": "",
      "memorize": `A blind sculptor reconstructs an entire hidden statue inside a sealed crate just by
        listening to the echoes of pebbles he tosses against its walls.`,
      "media_memorize": ""
    },
    "Observer": {
      "region": "estim",
      "theory": `A real-time model copy with output correction, x̂̇=Ax̂+Bu+L(y−Cx̂). The gain L places
        the eigenvalues of (A−LC) so the estimation error e=x−x̂ decays; it is the dual of
        state-feedback design and requires observability.`,
      "gist": `A model that reconstructs states you can't measure directly.`,
      "picture": `Estimating engine temperature from how the car behaves.`,
      "media_picture": "",
      "memorize": `A translucent ghost-train runs on invisible rails right beside the real locomotive, and
        an engineer flicks it sideways whenever its phantom gauges drift apart.`,
      "media_memorize": ""
    },
    "Kalman filter": {
      "region": "estim",
      "theory": `The optimal recursive estimator for linear-Gaussian systems: a predict step propagates
        the state mean and covariance through the model, then an update step corrects them using
        the Kalman gain that minimizes the estimate's variance.`,
      "gist": `Optimal state estimate blending a model with noisy measurements.`,
      "picture": `Smartly averaging your own guess and your GPS.`,
      "media_picture": "",
      "memorize": `A nervous owl wearing a GPS wristwatch averages its own gut hunch with the jittery map
        on its wrist, tilting its head toward whichever it trusts more this minute.`,
      "media_memorize": ""
    },
    "Moving horizon estimation": {
      "region": "estim",
      "theory": `The estimation dual of MPC: at each step solve a least-squares optimization over a
        sliding window of recent measurements subject to the model, naturally incorporating
        constraints and nonlinear dynamics.`,
      "gist": `Estimate states by optimizing over a recent window of data.`,
      "picture": `Judging your pace from the last few minutes, not all day.`,
      "media_picture": "",
      "memorize": `A judge peers through a narrow letter-slot that slides along a wall, grading a
        marathoner using only the few strides currently framed in the slot.`,
      "media_memorize": ""
    },
    "Sensor fusion": {
      "region": "estim",
      "theory": `Combine measurements of differing rate, noise, and modality into a single estimate,
        weighting each source by its uncertainty — Bayesian/Kalman fusion being the standard
        framework.`,
      "gist": `Combine several sensors (IMU, GPS, camera) into one estimate.`,
      "picture": `Using eyes, ears and balance together to know which way is up.`,
      "media_picture": "",
      "memorize": `Three quarreling parrots - one with a telescope, one with an ear trumpet, one with a
        spirit level - squabble on a perch until they suddenly shout the same answer in unison.`,
      "media_memorize": ""
    },
    "Tracking": {
      "region": "estim",
      "theory": `Recursively estimate the time-varying state (position, velocity, …) of one or more
        moving targets from noisy detections, including the data-association problem when
        multiple targets are present.`,
      "gist": `Continuously estimate a moving target's state.`,
      "picture": `Following a player with a camera.`,
      "media_picture": "",
      "memorize": `A lighthouse keeper swivels his beam to stay glued to a single glowing moth zigzagging
        across a pitch-black meadow, never losing it for a heartbeat.`,
      "media_memorize": ""
    },
    "Filtering": {
      "region": "estim",
      "theory": `Recover the current state or signal from noisy measurements up to the present (causal),
        in contrast to smoothing (which also uses future data) and prediction (which
        extrapolates ahead).`,
      "gist": `Separate the true signal from noise.`,
      "picture": `Noise-cancelling headphones, but for data.`,
      "media_picture": "",
      "memorize": `A grumpy librarian pours a roaring stream of static through a tiny silver sieve, and out
        the bottom drips only a clean, sparkling melody, drop by drop.`,
      "media_memorize": ""
    },
    "Calibration": {
      "region": "estim",
      "theory": `Identify and correct a sensor's systematic errors — bias, scale factor, axis
        misalignment — by comparison against a known reference, so that downstream estimates are
        unbiased.`,
      "gist": `Correct a sensor's bias and scale.`,
      "picture": `Zeroing a kitchen scale before weighing.`,
      "media_picture": "",
      "memorize": `A jeweler taps a button and his trembling golden scale, still cradling an empty velvet
        pouch, settles to a perfect glowing zero with a soft chime.`,
      "media_memorize": ""
    },
    "Particle filter": {
      "region": "estim",
      "theory": `A sequential Monte Carlo estimator: represent the state distribution by many weighted
        samples (particles), propagate them through the model, reweight by measurement
        likelihood, and resample — handling nonlinear, non-Gaussian problems.`,
      "gist": `Represent uncertainty with many sampled guesses.`,
      "picture": `A swarm of guesses; the survivors are weighted by fit.`,
      "media_picture": "",
      "memorize": `A thousand tiny glowing fireflies scatter over a dark city; the ones nearest the lost
        red balloon flare brighter and instantly bud into copies of themselves.`,
      "media_memorize": ""
    },
    "Sigma-point (unscented)": {
      "region": "estim",
      "theory": `The unscented filter propagates a small deterministic set of sigma points through the
        true nonlinearity to capture the posterior mean and covariance more accurately than the
        EKF, and needs no Jacobians.`,
      "gist": `Track uncertainty through nonlinearity using a few smart sample points.`,
      "picture": `A handful of well-placed probes instead of thousands.`,
      "media_picture": "",
      "memorize": `A handful of well-dressed scouts wade through a pool of liquid mercury and radio back
        the precise shape of the rippling, distorted reflection.`,
      "media_memorize": ""
    }
  }
};
