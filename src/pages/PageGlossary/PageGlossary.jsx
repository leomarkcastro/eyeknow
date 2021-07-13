import React from "react"

import { 
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonSearchbar,
} from '@ionic/react';

import { 
    bookOutline, 
    qrCode,  
} from 'ionicons/icons';

import style from "./PageGlossary.module.css"

const wordList = {
    "ALGORITHM": "An algorithm is a set of instructions that are followed to solve a problem. It's a computer's thought process.",
    
    "ARGUMENT" : "An argument is a way to provide more information to a function. The function can then use that information as it runs, like a variable.",
    
    "ARRAYS" : "Arrays are containers that hold variables; they're used to group together similar variables. You can think of arrays like shelves at a pet store. The array would be the shelf, and the animals in cages are the variables inside.",

    "ARITHMETIC OPERATORS" : "Arithmetic operators are essential in almost every application, especially in games. If a game character earns experience, it needs to be added to the total earned. If an arrow hits an enemy, the damage the enemy takes needs to be calculated.",

    "ASSIGNMENT OPERATORS" : "Assignment operators (+=, -=, *=, /=) are operators that combine variable assignments (=) with arithmetic operators. They serve as a shortcut when coders have to perform an operation that changes the value of a variable. If a rock falls on a game player's head, health needs to be subtracted from their total, and so on.",

    "AUGMENTED REALITY" : "Augmented reality (AR) is an interactive experience where digital objects are placed in a real-world environment in real time. While virtual reality creates a completely artificial environment, augmented reality uses the existing real-world environment and overlays new information on top of it. Pokémon Go is a popular example, blending the real world captured through your phone’s camera with virtual characters overlaid on top.",

    "AUTONOMOUS" : "Autonomous robot, self-driving car, and delivery bot are all terms used to describe robots that navigate their environments using sensors with little to no human interaction.",

    "BINARY NUMBERS" : "A binary number is a computer's way to represent information. Computers process millions of 1's and 0's a minute using different rules to interpret them as numbers, letters, operators, and everything else put into a computer.",

    "BIT" : "A binary number is a computer's way to represent information. Computers process millions of 1's and 0's a minute using different rules to interpret them as numbers, letters, operators, and everything else put into a computer.",

    "C++" : "C++ is a low-level yet versatile programming language. Kids who master this language will be able to solve complex problems and understand how programs work.",

    "CAMEL CASE" : "Variables should be named using camel case, meaning the first word of the name is lowercase and each new word after that is capitalized. It's called camel case because when it was originally written as CamelCase, the capital Cs look like the humps on a camel. iPhone, eBay, YouTube, and of course, iD in “ID Tech” are real-world examples of camel casing!",

    "CODING" : "Coding is how people create instructions for computers to follow. Just like people speak different languages, so do programs. For instance, Roblox uses the coding language Lua while Minecraft was built with Java.",

    "CODING LANGUAGES" : "Computers use coding languages to understand what people want them to do. Just like how people communicate with each other in English or Japanese, people communicate with computers in languages like C++ or Java. Some of the best coding languages for kids include JavaScript, Scratch, and Python.",

    "COMPUTER PROGRAM" : "A computer program is a group of instructions given to a computer to be processed. These instructions are typically used to solve a problem or make long problems for humans shorter and easier.",

    "CONDITIONAL STATEMENTS" : "Conditional statements evaluate to true or false. Use them to print information or move programs forward in different situations.",

    "ELSE STATEMENTS" : "Else statements are used to do something else when the condition in the if statement isn't true.",

    "FOR LOOPS" : "For loops allow you to run a block of code repeatedly, just like while loops. However, for loops run a block of code a set number of times. (Remember, while loops run an unknown or unspecified amount of times; more on that below.)",

    "FUNCTIONS" : "A function is a block of code that can be referenced by name to run the code it contains.",

    "IF STATEMENTS" : "An if statement runs a block of code based on whether or not a condition is true.",

    "INTEGRATED DEVELOPMENT ENVIRONMENT" : "Software such as Visual Studio is known as an Integrated Development Environment (IDE), which is where you type your code and run your programs. Basically, an IDE is software that makes coding simpler.",

    "INTELLIJ" : "To start writing code in Java, you can use IntelliJ, an IDE created for writing and running code.",

    "JAVA" : "Java is a powerful multi-platform programming language. It's used for many professional and commercial applications, including every Android application and even the Android operating system itself! Minecraft was completely developed in Java by Markus Persson. Gmail was created in Java because Java has a great performance rate and a good framework for web. When it comes to Java for kids, they can use Java to make a wide range of games and programs.",

    "JUPYTER NOTEBOOK" : "To start writing code in Java, you can use IntelliJ, an IDE created for writing and Jupyter Notebook is a type of Integrated Development Environment. Jupyter handles Python specifically.code.",

    "LINUX" : "Linux is an open-source operating system designed to run on multiple types of devices, like laptops, phones, tablets, robots, and many others. In fact, the Android operating system is based on Linux!",

    "LOOPS" : "Loops check a condition and then run a code block. The loop will continue to check and run until a specified condition is reached.",

    "MAIN FUNCTION" : "The main function is part of C++ and is called when the program starts.",

    "MACHINE LEARNING" : "Machine learning is getting a computer to act without explicitly being programmed to do so. It's an application of artificial intelligence where we give machines access to data and let them use that data to learn for themselves.",

    "MICRO:BIT" : "The micro:bit is a small programmable computer more formally known as a microcontroller development board.",

    "NEURAL NETWORKS" : "Machine learning is all about training an algorithm. In order to train an algorithm, neural networks are needed, which are sets of algorithms that are inspired by biological neural networks. A neural network is the 'brain' of the program.",

    "PYTHON" : "Python is a programming language that’s currently becoming more and more powerful with every new library added to its collection. It handles everything from web development and game design, to machine learning and AI. Python is known for having syntax that is simpler and easier to write than many other languages like Java and C++.",

    "SCRATCH" : "Scratch coding is an MIT-developed graphical programming language, where kids can learn drag-and-drop programming basics to create interactive stories and comics.",

    "SCRIPTS" : "In programming, a series of scripts, or sets of steps, are written for a computer to follow. Computers process the steps line-by-line from top to bottom. Each step is created by writing a statement.",

    "SPRITES" : "Sprites are computer graphics that you can move via code; a 2D player that walks is an animated sprite. For kids, Scratch sprites provide a fun intro to coding.",

    "STATEMENTS" : "The way you tell a computer to perform an action is by giving it instructions or writing statements to explain a desired action. Again, it’s similar to writing sentences in English, but with words, numbers, and punctuation added depending on the programming language.",

    "TENSORFLOW" : "TensorFlow is a library developed by Google to facilitate the creation and training of machine learning models and neural networks.",

    "TRAINING" : "Training is the process of feeding huge amounts of data into an algorithm so the algorithm can adjust and improve, as if it's learning.",

    "VARIABLE" : "A variable is a container that holds a single number, word, or other information that you can use throughout a program. A variable is like a chest you can fill with different values. You name the chests so you can find them later. Variables have three parts: type, name, and value.",

    "VARIABLE TYPES" : "Once a variable is declared, a variable type is specified. Basic variable types include: string (words and phrases), char (short for “character;” a single letter or symbol you can type), int (short for “integer;” for whole numbers), double or float (for decimal numbers), and bool (short for “boolean;” for true or false values).",

    "WHILE LOOPS" : "While loops are set up just like if statements. They check for a condition and run the code in them until the condition is no longer true. A while loop will run forever (until the condition is false).",

    "ANTIDERIVATIVE" : "A function F(x) is called an antiderivative of a function f(x) if F'(x) =; f(x) for all x in the domain of f. In words, this means that an antiderivative of f is a function which has f for its derivative.",

    "CHAIN RULE" : "The chain rule tells how to find the derivative of composite functions. In symbols, the chain rule says In words, the chain rule says the derivative of a composite function is the derivative of the outside function, done to the inside function, times the derivative of the inside function.",
    
    "CHANGE OF VARIABLES" : "A term sometimes used for the technique of integration by substitution.",

    "CONCAVE DOWNWARD" : "A function is concave downward on an interval if f'(x) is negative for every point on that interval.",

    "CONCAVE UPWARD" : "A function is concave upward on an interval if f'(x) is positive for every point on that interval.",

    "CONTINUOUS" : "A function f(x) is continuous at a point x =; c when f(c) exists, [img id:59930] exists, and [img id:59931]. In words, this means the curve could be drawn without lifting the pencil. To say that a function is continuous on some interval means that it is continuous at each point in that interval.",

    "CRITICAL POINT" : "A critical point of a function is a point (x, f(x)) with x in the domain of the function and either f'(x) =; 0 or f'(x) undefined. Critical points are among the candidates to be maximum or minimum values of a function.",

    "CYLINDRICAL SHELL METHOD" : "A procedure for finding the volume of a solid of revolution by treating it as a collection of nested thin rings.",

    "DEFINITE INTEGRAL" : "The definite integral of f(x) between x =; a and x =; b, denoted gives the signed area between f (x) and the x-axis from x =; a to x =; b, with area above the x-axis counting positive and area below the x-axis counting negative.",

    "DERIVATIVE" : "The derivative of a function f (x) is a function that gives the slope of f (x) at each value of x. The derivative is most often denoted [img id:59928]. The mathematical definition of the derivative is or in words the limit of the slopes of the secant lines through the point (x, f(x)) and a second point on the graph of f(x) as that second point approaches the first. The derivative can be interpreted as the slope of a line tangent to the function, the instantaneous velocity of the function, or the instantaneous rate of change of the function.",

    "DIFFERENTIABLE" : "A function is said to be differentiable at a point when the function's derivative exists at that point. A function will fail to be differentiable at places where the function is not continuous or where the function has corners.",

    "DISK METHOD" : "A procedure for finding the volume of a solid of revolution by treating it as a collection of thin slices with circular cross sections.",

    "EXTREME VALUE THEOREM" : "A theorem stating that a function which is continuous on a closed interval [a, b] must have a maximum and a minimum value on [a, b].",

    "FIRST DERIVATIVE TEST FOR LOCAL EXTREMA" : "A method used to determine whether a critical point of a function is a local maximum or local minimum. If a continuous function changes from increasing (first derivative positive) to decreasing (first derivative negative) at a point, then that point is a local maximum. If a function changes from decreasing (first derivative negative) to increasing (first derivative positive) at a point, then that point is a local minimum.",

    "GENERAL ANTIDERIVATIVE" : "If F(x) is an antiderivative of a function f(x), then F(x) + C is called the general antiderivative of f(x).",

    "GENERAL FORM" : "The general form (sometimes also called standard form) for the equation of a line is ax + by =; c, where a and b are not both zero.",

    "HIGHER ORDER DERIVATIVES" : "The second derivative, third derivative, and so forth for some function.",

    "IMPLICIT DIFFERENTIATION" : "A procedure for finding the derivative of a function which has not been given explicitly in the form 'f(x) =;'.'",

    "INDEFINITE INTEGRAL" : "The indefinite integral of f(x) is another term for the general antiderivative of f(x). The indefinite integral of f (x) is represented in symbols as instantaneous rate of change. One way of interpreting the derivative of a function is to understand it as the instantaneous rate of change of that function, the limit of the average rates of change between a fixed point and other points on the curve that get closer and closer to the fixed point.",

    "INSTANTANEOUS VELOCITY" : "One way of interpreting the derivative of a function s(t) is to understand it as the velocity at a given moment t of an object whose position is given by the function s(t).",

    "INTEGRATION BY PARTS" : "One of the most common techniques of integration, used to reduce complicated integrals into one of the basic integration forms.",

    "INTERCEPT FORM" : "The intercept form for the equation of a line is x/a + y/b =; 1, where the line has its x-intercept (the place where the line crosses the x-axis) at the point (a,0) and its y-intercept (the place where the line crosses the y-axis) at the point (0,b).",

    "LIMIT" : "A function f(x) has the value L for its limit as x approaches c if as the value of x gets closer and closer to c, the value of f(x) gets closer and closer to L.",

    "MEAN VALUE THEOREM" :  "A function f(x) is continuous on a closed interval [a,b] and differentiable on the open interval (a,b), then there exists some c in the interval [a,b] for which",

    "NORMAL LINE" : "The normal line to a curve at a point is the line perpendicular to the tangent line at that point.",

    "POINT OF INFLECTION" : "A point is called a point of inflection of a function if the function changes from concave upward to concave downward, or vice versa, at that point.",

    "POINT SLOPE FORM" : "The point-slope form for the equation of a line is y – y1 =; m(x – x1), where m stands for the slope of the line and (x1,y1) is a point on the line.",

    "REIMMAN SUM" : "A Riemann sum is a sum of several terms, each of the form f(xi)Δx, each representing the area below a function f(x) on some interval if f(x) is positive or the negative of that area if f(x) is negative. The definite integral is mathematically defined to be the limit of such a Riemann sum as the number of terms approaches infinity.",

    "SECOND DERIVATIVE TEST FOR LOCAL EXTREMA" : "A method used to determine whether a critical point of a function is a local maximum or local minimum. If f'(x) =; 0 and the second derivative is positive at this point, then the point is a local minimum. If f'(x) =; 0 and the second derivative is negative at this point, then the point is a local maximum.",

    "SLOPE OF THE TANGENT LINE" : "One way of interpreting the derivative of a function is to understand it as the slope of a line tangent to the function.",

    "SLOPE-INTERCEPT FORM" : "The slope-intercept form for the equation of a line is y =; mx + b, where m stands for the slope of the line and the line has its y-intercept (the place where the line crosses the y-axis) at the point (0,b).",

    "STANDARD FORM" : "The standard form (sometimes also called general form) for the equation of a line is ax + by =; c, where a and b are not both zero.",
    
    "SUBSTITUTION" : "Integration by substitution is one of the most common techniques of integration, used to reduce complicated integrals into one of the basic integration forms.",

    "TANGENT LINE" : "The tangent line to a function is a straight line that just touches the function at a particular point and has the same slope as the function at that point.",

    "TRIGONOMETRIC SUBSTITUTION" : "A technique of integration where a substitution involving a trigonometric function is used to integrate a function involving a radical.",
    
    "WASHER METHOD" : "A procedure for finding the volume of a solid of revolution by treating it as a collection of thin slices with cross sections shaped like washers.",

    "ACTIVE CIRCUIT AREA" : "All areas from outside edge of the bond pads inward, except where there is an active line in the device located beyond the outside edge of the bond pads.",

    "AC TEST" : "Measurement of dynamic or switching electrical parameters.",

    "ALTERNATING CURRENT (AC)" : "Either voltage or current that varies smoothly from zerp to a maximum value in one direction, or polarity, and returns to zero. It then reverses its direction(polarity) and rises to a maximum value in the opposite direction, and then returns to zero to complete the cycle. This cycle repeated continuosly. The number of cycles per second is its frequency, measurement in hertz (Hz). See SINE WAVE.",

    "ANALOG AMPLIFIER (LINEAR)" : "A circuit whose output waveshape is an amplified version of its input waveshape. Also called a LINEAR AMPLIFIER.",

    "ANALOG SIGNAL" : "An electrical signal that has continously varying voltages, frequencies, or phases.",

    "ANALOG SWITCH" : "A digitally controlled switch that provides a conductive path for a linear or analog voltage in its ON state.",

    "AMPERE" : "The unit of measurement of electrical current flow, named after Andre Ampere, a 19th century French physicist. One ampere is the value of current that will be maintained in a circuit with an electromotive force of one volt and a resistance of one ohm. One ampere = 6.25 x 10 ^ 18 electrons/second. See CURRENT.",

    "AMPLIFICATION" : "The process of increasing the voltage, current, or power of an electrical or electronic signal.",

    "AMPLIFIER" : "An electronic circuit that draws power from a supply voltage, or voltage source, to produce, at its output, an increased reproduction of the signal existing at its input. The amplifying component could be a transistor, vacuum tube, or an appropriate magnetic device.",

    "ANODE" : "One of the two terminals of a diode (positive type material) or the output terminal (also positive type material) of a silicon controlled rectifier (SCR).",

    "ANALOG VOLTAGE" : "A gradually changing voltage. The term is interchangeable with LINEAR VOLTAGE. For example, the voltage sensed by an automobile's speedometer is the analog of the speed of the automobile.",

    "ARMATURE" : "The moving part of a magnetic device consisting of one or more coils that are electrically connected to create the rotateable",

    "BARE DIE" : "IIndividual, unpackaged silicon integrated circuits. ",

    "BALL BONDING" : "A thermocompression bonding technique. The wire end is melted to form a ball, which provides a larger area of contact than otherwise possible. ",

    "BASE" : "An electrical device consisting of one or more cells which converts chemical or solar energy into electrical energy. A battery provides a source of steady-state DC voltage.",

    "BETA" : "The Greek letter that designates the current gain of a bipolar transistor. It is the ratio of the transistor's output current (IC) to its input current (IB).",

    "BIAS VOLTAGE" : "The DC voltage applied across the terminals of a PN junction , whether the device is a diode, bipolar transistor, or JFET. A PN junction is forward biased when a positive voltage is applied to the P-region with respect to the N-region, and reversed biased when the voltage polarity is reversed.",

    "BIPOLAR TRANSISTOR" : "A three-terminal semiconductor component with a three-layer structure of alternate negative and positive type materials (NPN or PNP). It provides current gain and voltage amplification in a circuit.",

    "BONDING WIRE" : "Fine wire used for making electrical interconnection between various bonding pads to device terminal.",

    "BRIDGE RECTIFIER" : "Four semiconductor diodes configured as a bridge that acts to change AC to full-wave pulsating D.",

    "BULK METAL FOIL" : "A foil layer of resistance alloy bonded to a ceramic substrate providing a compensation technique to produce a very low TCR and insulated by a transfer molded case.",

    "CABLE" : "A type of linear transmission medium. Some of the common types of cables include: hook up wire, coaxial (shielded) cables, lamp amd mains cable, figure-8 (zip) cable and fibre optics.",

    "CAPACITOR" : "A pair of parallel 'plates' separated by an insulator (the dielectric). Stores an electric charge, and tends to pass higher frequencies more readily than low frequencies. Does not pass direct current, and acts as an insulator. Electrically it is the opposite to an inductor. Basic unit of measurement is the Farad, but is typically measured in micro-farads (uF = 1x10^-6F) or nano-farads (nF - 1 x 10^-9F).",

    "CATHODE" : "One of the two terminals of a diode (negative type material) or the terminal (also negative type material) that is common to both input and output sections of an SCR.",

    "CELL" : "A single unit of a battery that generates a DC voltage by converting chemical or solar energy into electrical energy.",

    "CHIPS" : "Unpackaged diodes, bipolar transistors, SCRs, TRIACs, and field-effect transistors (FETs) - also called DICE.",

    "CIRCUIT" : "A single component or group of interconnected components powered by a source of voltage and configured according to specified rules. A circuit performs a specific or a predetermined general task.",

    "CIRCUIT BREAKER" : "An automatic, magnetic, or bimetallic device that will open a current-carrying circuit causing the circuit to become inoperative. This device is used to prevent circuit damage under a condition of excess current. Unlike a fuse that melts when its rating is exceeded, a circuit breaker can be reset automatically or manually when the circuit problem is corrected.",


    "CMOS (COMPLEMENTARY MOSFET)" : "A combination of an N-channel and a P-channel MOSFET in a single switching circuit. This circuit features very low power dissipation and the effective elimination of an external load resistor. The device responds to a digital pulse at its input by turning one section of the device ON and the other OFF, causing the turned OFF section to act as its high-resistance load. When the input pulse reverts to zero, the state of the two sections of the device are reversed.",

    "COATED WIREWOUND" : "Resistance alloy in wire form wound on a former and insulated by a conformal coating of an epoxy resin, silicone enamel or vitreous enamel.",

    "COAXIAL CABLE" : "A metallic cable constructed in such a way that the inner conductor is shielded from EMR (electromagnetic radiation) interference by the outer conductor. Coaxial cable is less susceptible to more transmission impairments than twisted pair cable, and it has a much greater bandwidth; thus coaxial cable is used by most analogue and digital systems for the transmission of low level signals.",

    "COIL" : "A length of insulated wire wound around a laminated iron or steel core, a ferrite or powdered iron core, or a non-ferrous material such as ceramic aluminum, or plastic. A non-ferrous core is called an 'air core' since it is non-magnetic in nature.",

    "COMPLEMENTARY BIPOLAR TRANSISTORS" : "An arrangement of NPN and PNP bipolar transistors in which the polarity of the supply voltage applied to one device is the reverse of the other. The two transistors normally have identical electrical characteristics and are used as a matched pair.",


    "COMPONENT" : "An individual part or element of an electrical or electronic circuit which performs a designated function within that circuit. It may consist of a single part, a combination of parts, or assemblies.",

    "CONDUCTOR" : "A metal material that allows electrical current to flow and has essentially zero resistance.",

    "CONDUCTIVE ADHESIVE" : "An adhesive material (usually epoxy) that has metal powder (usually silver) added to increase electrical conductivity.",

    "CURRENT" : "The movement of electrons per second through a conductor or a component. It is measured in amperes and is designated by the letter, I. There are 6.25 x 10^18 electrons per second in one ampere. (10^18 = a billion billion).",

    "DECAY TIME" : "The time it takes for a voltage to be reduced to a given percent of the peak voltage.",

    "DELAY TIME" : "The time it takes for an electrical signal to propagate through a given path.",

    "DIFFUSION" : "One of a series of steps in the fabrication of a semiconductor. This step introduces a small amount of a chemical element, called impurity or dopant, into the substrate. These steps will produce either N-type or P-type regions to create the function of a desired component on the chip.  The conductivity of semiconductors may easily be modified by introducing impurities into their crystal lattice. The process of adding controlled impurities to a semiconductor is known as doping.",

    "DIGITAL SWITCH" : "A switching circuit that turns ON and OFF in response to a digital or step-function pulse.",

    "DIODE" : "A two-terminal semiconductor device that will allow current to flow through it in only one direction. With the proper voltage polarity across the device, it will act as a conductor. When the voltage polarity is reversed, the device will act as a nonconductor, allowing no current to flow.",

    "DIGITAL VOLTAGE" : "A discontinuous or step-function electrical pulse characterized by an instantaneous change from zero to some finite level, either in a positive or negative direction with respect to a reference.",

    "DIRECT CURRENT - DC" : "An electrical current or voltage with a constant direction (polarity) with respect to a fixed reference. DC can be either positive or negative.",

    "DRAIN" : "The output terminal of a JFET or MOSFET.",

    "ELECTRICAL GENERATOR" : "An assembly consisting of a magnet mounted on a frame, and a wire coil (armature) that can be rotated within the magnetic field. The function of the generator is to convert mechanical energy into electrical energy. See TURBINE.",

    "ELECTRODES" : "Conductive metallic strips normally inserted into an electrolyte to provide the chemical action needed to convert chemical energy into electrical energy.",

    "ELECTROMOTIVE FORCE (EMF)" : "The electrical force that exists across the terminals of an electrical generator, or battery. When connected to a load in a closed circuit, this force produces a voltage across the load and causes current to flow in that circuit. EMF is measured in volts and designated with the letter E (supply voltage) or V (load voltage).",

    "EMITTER" : "One of the terminals of a bipolar transistor that is generally used as the terminal common to both the input and output sections of the device.",

    "FILTER" : "A circuit which is frequency dependent. The 'pass band' is the range of frequencies allowed through, and the 'stop band' is that range of frequencies which are blocked.",

    "FREQUENCY" : "(f)The number of cycles per second of an AC wave measured in hertz (Hz).",

    "FULL-WAVE RECTIFIER" : "A configuration of either two or four diodes that acts to change AC to full-wave DC The two-diode configuration is used in conjunction with a center-tapped secondary of a transformer. The four diode configuration is used when no center-tap exists at the transformer secondary and is called a BRIDGE RECTIFIER.",

    "FUNCTIONAL CIRCUIT ELEMENTS" : "Diodes, transistors, capacitors, and resistors.",

    "FUSE" : "A short strip of metal having extremely low resistance and functioning as a protective device in a circuit. A fuse will melt when its rated current is exceeded, thereby opening the circuit.",

    "GROUND" : "The part of a circuit or system that is the reference for the voltages existing in that circuit or system. The ground consists of a material such as copper, steel, aluminum, or any other conductive material.",

    "HALF-WAVE RECTIFIER" : "A single diode that acts to change AC to half-wave pulsating DC",

    "HIGH-PASS" : "A filter which allows high frequencies to pass while blocking low frequencies.",

    "HYBRID CIRCUIT" : "A component containing one or more bare die and at least two circuit elements.",
        
    "INFRARED DATA COMMUNICATION" : "Are optoelectronic components that enable two-way, wireless data transmission at very fast speeds. An infrared transceiver includes an IR emitting device, a detecting device, and an integrated control IC, all part of a special package design with two integrated optical lenses. IRDCs are used in PDAs, cell phones, computers, digital cameras, and other products.",

    "INDUCTOR" : "A coil of wire which exhibits a resistance to any change of amplitude or direction of current flow through itself. Inductance is inherent in any conductor, but is &quot;concentrated&quot; by winding into a coil. An inductor tends to pass low frequencies more readily than high frequencies. Electrically it is the opposite of a capacitor. Basic unit of measurement is the Henry (H), in crossover networks it will typically be measured in milli-henrys (mH = 1 x 10^-3) and for RF micro-henrys (uH) are common.",

    "INSULATOR" : "A material that prevents the passage of electricity, heat or sound. The plastic coating on wires is an insulator, preventing the wires from coming into electrical contact with each other. Insulators are extensively used in electronics. Most good electrical insulators are also good thermal insulators.",

    "INTEGRATED CIRCUIT (IC)" : "A collection of active and passive devices (e.g. transistors and resistors) mounted on a single slice of silicon and packaged as a single component. Examples include operational amplifiers, Central Processing Units (CPUs), random access memory (RAM), etc.",

    "LEAD FRAME" : "A metallic frame containing leads and a base to which an unpackaged integrated circuit is attached. After encapsulation, the outer part of the frame is cut away and the leads are bent into the required shapes.",

    "LINE VOLTAGE" : "The AC voltage supply that provides the prime source of electrical power for office, laboratory, factory, and home electrical and electronic equipment. Throughout North, Central, and South America, the line voltage is nominally specified as 120 volts AC, at 60 hertz. In Europe, the line voltage is nominally specified as 240 volts AC, at 50 hertz. Line voltage can be either privately or publicly generated.",

    "LOAD" : "A device, component, appliance, system, or machine to which an electrical force (voltage) is applied. Resistance is inherent in the structure of a load and is an integral part of an electrical or electronic circuit.",

    "MICROBOND" : "A bond of a small wire to a conductor or chip device.",

    "MICROCIRCUIT" : "A section of semiconductor wafer with circuitry and components etched into the top; Also called a die or chip.",

    "MULTICHIP MODULE (MCM)" : "A hybrid which contain at least two bare die.",

    "MULTILEVEL METALLIZATION" : "Two or more levels of metal or any other material used for interconnections that are isolated from each other by insulating material. ",

    "NECKDOWN" : "The narrowing of leads or wire.",

    "NONCONDUCTOR (INSULATOR)" : "NONCONDUCTOR (INSULATOR)",

    "OHM" : "The unit of measurement of resistance symbolized by the Greek letter, omega (W). It is named after George Ohm, a 19th century German physicist. One ohm is the value of resistance through which an electromotive force of one volt will maintain a current of one ampere. See RESISTANCE.",

    "OHM'S LAW" : "The relationship that exists between the electrical parameters of voltage (electrical pressure), resistance (the opposition to the voltage), and current (the flow of electrons in the circuit). Ohm's Law states that the amount of current flowing in a circuit is equal to the applied voltage divided by the circuit resistance.",

    "OPTOELECTRONIC COMPONENTS" : "Emit or detect light in electronic circuits. Types include infrared data communications devices (IRDCs) for wireless two-way data transfer; optocouplers for circuit isolation; IR emitters for one-way remote control; optical sensors for detection; and LEDs for light sources.",

    "ORIGINAL WIDTH" : "The width dimensions or distances that is intended by design.",

    "OXIDE LAYER" : "A layer of an integrated circuit created to provide isolation between conductive layers.",

    "PACKAGE" : "An enclosure for a single element, an integrated circuit, or a hybrid circuit. It provides hermetic or non-hermetic protection, determines the form factor, and serves as the first level interconnection externally for the device by means of package terminals. A package generally consists of a bottom part, called the case or header, and a top part, called the cover or lid. These are sealed into one unit.",

    "PACKAGE POST" : "A generic term used to describe the bonding location on the inside of the package.",

    "PASSIVATION" : "Insulating layer directly over a circuit or circuit element to protect the surface from contaminants, moisture, or particles.",

    "PASSIVE COMPONENTS" : "Resistors, capacitors, and inductors do not require a power supply to handle the signals that pass through them. Passive components are used to store electrical charges, to limit or resist electrical current, and for filtering, surge suppression, measurement, timing, and tuning applications.",

    "PERIOD" : "The time required to complete one cycle of AC and is calculated as the reciprocal of the frequency (1/f). It is measured in seconds and designated with the letter T.",

    "PHOTOVOLTAIC EFFECT" : "The generation of an electrical current in a circuit containing a photosensitive device when the device is illuminated by visible or non-visible light.",

    "PN JUNCTION" : "The simplest semiconductor structure. As a discrete device, it is called a diode. It consists of a positive or P-region (containing positive ions) in junction with a negative or N-region (containing negative electrons).",

    "PROTECTED AREA" : "An area equipped with appropriate ESD protective materials and equipment. It provides a site where ESD voltage is limited below the ESD sensitivity level of the component or equipment being handled or manufactured.",

    "PULSATING DC VOLTAGE" : "Rectified AC voltage, either positive or negative, with respect to a reference. Half-wave pulsating DC voltage uses only one-half of the available AC voltage. Full-wave DC voltage uses both halves of the AC voltage wave shape.",

    "RECTIFIER" : "A semiconductor diode, or group of diodes, that acts to change AC to pulsating DC",

    "RELIABILITY" : "The assurance that a component will perform in a specified manner for a specified time under a set of specified conditions that include electrical, mechanical, thermal, and environmental stresses. The concept of reliability encompasses the elements of both quality and longevity. See STABILITY.",

    "RESISTANCE" : "The electrical characteristic of a component, material, circuit, or system which acts to limit current in a circuit. It is measured in ohms (W) and designated with the letter R. Resistance depends on the molecular structure and dimensions of a component or device and on the configuration of a circuit or system. See OHM.",

    "SCR (SILICON CONTROLLED RECTIFIER)" : "A silicon device with four layers (PNPN) having an input control terminal (gate), an output terminal (anode) and a terminal common to both input and output (cathode). It generally operates as an AC switch for lighting and heating control.",

    "SELF SUPPORTING PREFORMED WIRE" : "Insulated or uninsulated resistance alloy wire formed to make the resistance element with integral or welded leads for through hole applications.",

    "SILICON CHIP" : "Although a variety of semiconductor materials are available, the most commonly used is silicon and integrated circuits are popularly known as silicon chips, or simply chips.",

    "SINE WAVE" : "A smooth, continuously moving waveshape that has no break in its appearance. It has positive and negative half-cycles that are generally symmetrical with respect to a reference. The cyclical repetition of these waves produces a wave shape that has a specified frequency in hertz (number of cycles per second) and a specified amplitude.",

    "SKU" : "Stock Keeping Unit. A common term for a unique numeric identifier, used most commonly in online business to refer to a specific product in inventory or in a catalog.",

    "SLURRY" : "A thick mixture of water and fine wafer particles produced during the wafer sawing process. If wafer is not cleaned properly, slurry can be seen as a very fine particle deposit over the surface of individual die, sometimes forming patterns from the spray of the mixture.",

    "SQUARE WAVE" : "A rectangular-shaped (step-function) periodic wave with a positive and negative half-cycle of equal lengths of time or duration. A square wave consists of a sine wave's fundamental frequency combined with the odd harmonics (multiples) of its fundamental frequency.",

    "STEADY-STATE DC VOLTAGE" : "A fixed polarity of positive or negative voltage with respect to a reference. This form of voltage is used as the power source for electronic circuits.",

    "SUBSTRATE" : "The base material upon which the passivation, metallization and circuit elements are added to built a device.",

    "SURFACE MOUNT METAL STRIP" : "A strip of insulated resistance alloy with surface mount terminations. The insulation may be either an epoxy transfer molded case or a conformal coating.",

    "TEMPERATURE COEFFICIENT (TC)" : "The change in the characteristic of a component which occurs because of a change in temperature. TC can be specified either as the number of parts per million (ppm) change per °C change in temperature, or as a percent change in value per °C change in temperature.",

    "THROUGH HOLE METAL STRIP" : "A strip of insulated resistance alloy with through hole terminations. The insulation may be either an epoxy transfer molded case or a conformal coating.",

    "TRANSCONDUCTANCE" : "Transconductance is an expression of the performance of a bipolar transistor or field-effect transistor (FET). In general, the larger the transconductance figure for a device, the greater the gain (amplification) it is capable of delivering, when all other factors are held constant.",

    "TRAYING PICK & PLACE" : "Careful die handling is paramount to maintain overall quality and good die yields from the wafer once it has been sawn. Due to the delicate nature of the product (particularly on the active side of the die), using a Pick and Place machine allows us to apply the absolute minimum contact and relative force required to remove die from the foil ring frame after saw. Although there are circumstances where a degree of manual removal is necessary it is always preferable to opt for an automated process by using a Pick &amp; Place machine as the possibility mechanical damage to the die is greatly reduced Pick Place automation is also necessary to deal with high volumes and enables us to offer fast output turn-arounds which are simply not possible otherwise. A good example to use would be a small transistor, even our most dextrous and experienced clean room operative could not hope to manually remove 1,750 die in an hour! Lastly, the use of an automatic Pick and place machine also enables us to guarantee 100% die orientation, this ensures complete compatibility with end customer equipment where once again high-speed production is required. ",

    "TRIAC (TRIODE AC SWITCH)" : "A three-terminal silicon device that functions as two SCRs configured in an inverse, parallel arrangement, providing a means of providing load current during both halves of the AC supply voltage. A TRIAC is generally used for motor speed control. Since load current (armature current) flows during both halves of the applied AC voltage, the motor rotates smoothly at all rotational speeds.",

    "TRIBOELECTRIC EFFECT" : "The phenomenon of transferring electrons from one non-conductive material to another when friction is produced between them. See ELECTROSTATIC CHARGE.",

    "TURBINE" : "A mechanical structure with rotatable blades mounted onto its assembly and mechanically coupled to an electrical generator. When a turbine is placed in the path of flowing water, steam, or moving air, the movement of the water, steam, or air across the blades causes them to turn. The generator's armature rotates within a magnetic field which produces electrical energy at the terminals of the generator. See ELECTRICAL GENERATOR.",

    "UP-BONDING" : "A wire bonding operation carried out from the die up to the package post.",

    "VARACTOR" : "A semiconductor diode that acts as a variable capacitor whose value changes inversely to reverse bias voltage.",

    "VARIABLE RESISTOR" : "Resistor whose resistance can be changed by turning a shaft. See also &quot;potentiometer and rheostat.",

    "VARISTOR" : "A metal (zinc) oxide over-voltage protective device. See METAL OXIDE ELEMENT.",

    "VISIBLE LINE OF SEPARATION" : "Is understood to be separation between two elements that is clearly visible at 100x magnification. ",

    "VOID" : "Any region where bare semiconductor material or passivation is visible within the design areas of the metallization.",

    "VOLT" : "The unit of measurement of electromotive force necessary to produce one ampere of current in a circuit having a total resistance of one ohm. The volt is named for Alessandro Volta, an 18th century Italian physicist ",

    "VOLTAGE" : "The electromotive force that exists across a voltage source (supply voltage) or a load in a circuit. Its unit of measurement is a volt. See ELECTROMOTIVE FORCE.",

    "VOLTAGE ARRESTOR" : "A fast-acting, over-voltage protective device that can absorb or short a voltage to ground when the voltage is in excess of the device's rated value.",

    "WAFER" : "A disk of semiconductor material that forms the base on which a number of integrated circuits are built. Typical 4, 6, 8, or 12 inches in diameter and between .010 & .030 thick.",

    "WATT" : "The unit of measurement for electrical power, named after James Watt, an 18th century Scottish engineer. One watt of power is dissipated when a voltage of one volt is applied across a load of one ohm resulting in one ampere of current in the circuit. See POWER.",

    "WAVELENGTH" : "The physical distance between the beginning and the end of a cycle in a periodic wave (sine wave or square wave) as it travels through space or through a conductor. Wavelength is measured in meters (or in Ångstrom units) and is designated with the Greek letter lambda (l).",

    "WIRE BOND" : "The use of tiny wires that are soldered to the bare die on one end and to metal leads of the chip package on the other. Before the advent of flip chips and solder ball techniques, wire bonding was the traditional interconnection method to and from the chip.",

    "ZENER" : "A semiconductor diode with the unique characteristic of providing a predictable value of voltage breakdown (called zener voltage) when in its reverse biased mode. At the breakdown mode, it exhibits a very sharp break from its nonconducting state into its breakdown state, maintaining a constant value of reverse voltage across it. The zener diode operates as a voltage regulator, voltage reference, and excess voltage circuit protection device.",

}

class PageGlossary extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            wordList: wordList
        }

    }

    changeSearch(ev){
        let st = {...this.state}
        st.search = ev.detail.value
        
        this.setState(st)

        let moods = document.querySelectorAll('.comps');
        
        requestAnimationFrame(() => {
            moods.forEach(item => {
                const shouldShow = item.querySelector('.comps_title').textContent.toLowerCase().indexOf(ev.detail.value.toLowerCase()) > -1;
                item.style.display = shouldShow ? 'block' : 'none';
            });
        })
        

    }

    render(){
        return (
            
            <div>
            
                <IonSearchbar onIonChange={this.changeSearch.bind(this)}/>

                {
                    Object.keys(this.state.wordList).map((e,i) => (
                        <IonCard key={`glossary_${i}`} className="comps">
                            <IonCardHeader>
                                <IonCardTitle className="comps_title">{e}</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                {this.state.wordList[e]}
                            </IonCardContent>
                        </IonCard>
                    ))
                }

            </div>
            
        )
    }

}

export default PageGlossary