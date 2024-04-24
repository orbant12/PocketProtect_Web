

export const HeroSection = () => {
    //ICON: npm i devicons-react

    //CSS 
    /*
        .row1{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            padding: 100px 200px;
            background-color: rgb(0, 0, 0);
            align-items: center;
        }

        .hero-left{
            display: flex;
            flex-direction: column;
            width: 400px;
            justify-content: center;
            animation: fadeIn 1s ease-in-out;
        }

        .hero-m-title{
            font-size: 35px;
            font-weight: 600;
            margin-bottom: 20px;
            color: white;
            max-width: 400px;
        }

        .hero-m-title h2{
            font-size: 55px;
            font-weight: 600;
            margin-bottom: 20px;
            color: white;
        }

        .hero-s-title{
            font-weight: 300;
            opacity: 0.6;
            margin-bottom: 20px;
            color: white;
            max-width: 400px;
        }

        .hero-s-title h4{
            font-size: 15px;
            font-weight: 450;
            opacity: 0.6;
            margin-bottom: 20px;
            color: white;
        }

        .hero-b-row{
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-top: 20px;
        }

        .filled-btn{
            padding: 18px 25px;
            border: 1px solid black;
            border-radius: 3px;
            background-color: var(--primary-color);
            color: rgb(0, 0, 0);
            cursor: pointer;
            font-weight: 800;
        }

        .filled-btn:hover{
            background-color: transparent;
            color: white;
            border: 1px solid white; 
        }

        .unfilled-btn{
            padding: 10px 20px;
            border: 1px solid black;
            border-radius: 10px;
            background-color: black;
            color: white;
            cursor: pointer;
            font-weight: 500;
            margin-left: 30px;
            opacity: 0.5;
        }

        .unfilled-btn:hover{
        opacity: 1;
        transform: scale(1.07);
        }

        .trust-row{
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 100%;
            justify-content: space-between;
            margin-top: 50px;
        }

        .trust-row h6{
            font-size: 15px;
            font-weight: 450;
            opacity: 0.4;
            color: white;
            margin-right: 50px;
        }

        @media (max-width: 790px) {

            .row1{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                width: 100%;
                padding: 10px 10px;
                margin-right: auto;
                margin-left: auto;
                justify-content: center;
                }
                
                .hero-left{
                display: flex;
                flex-direction: column;
                width: 90%;
                justify-content: center;
                margin-top: 30px;
                }
                
                .hero-m-title{
                font-size: 35px;
                font-weight: 600;
                margin-bottom: 20px;
                color: white;
                max-width: 400px;
                }
                
                .hero-m-title h2{
                font-size: 50px;
                font-weight: 600;
                margin-bottom: 20px;
                color: white;
                }
                
                .hero-s-title{
                font-weight: 300;
                opacity: 0.6;
                margin-bottom: 20px;
                color: white;
                max-width: 400px;
                }
                
                .hero-s-title h4{
                font-size: 12px;
                font-weight: 450;
                opacity: 0.6;
                margin-bottom: 20px;
                color: white;
                }
                
                .filled-btn{
                padding: 15px 20px;
                border: 1px solid black;
                border-radius: 3px;
                background-color: var(--primary-color);
                color: rgb(0, 0, 0);
                cursor: pointer;
                font-weight: 800;
                }
                
                .filled-btn h4{
                font-size: 15px;
                color: rgb(0, 0, 0);
                font-weight: 800;
                }
                
                .unfilled-btn{
                padding: 10px 20px;
                border: 1px solid black;
                border-radius: 10px;
                background-color: black;
                color: white;
                cursor: pointer;
                font-weight: 500;
                margin-left: 30px;
                opacity: 0.7;
                }
                
                .trust-row{
                display: flex;
                flex-direction: row;
                align-items: center;
                width: 95%;
                justify-content: space-between;
                margin-top: 50px;
                }
                
                .trust-row h6{
                font-size: 15px;
                font-weight: 450;
                opacity: 0.4;
                color: white;
                margin-right: 20px;
                }
            }

        @keyframes fadeIn{
            0%{
                opacity: 0;
                transform: translateY(50px);
            }

            100%{
                opacity: 1;
                transform: translateY(0);
            }
        }

    */

    return(
        <div className="row1">
        <div className="hero-left">
            <div className="hero-m-title">
                <h2>Build a great place to work</h2>
            </div>
            <div className="hero-s-title">
                <h4>Stairs brings together your team's working docs and important discussions. Move projects faster, work more asyncrously and feel connected.</h4>
            </div>
            <div className="hero-b-row">
                <div className="filled-btn">
                    <h4>Try Stairs for free</h4>
                </div>
                <div className="unfilled-btn">
                    <h4>How it works</h4>
                </div>
            </div>
            <div className="trust-row">
                <h6>Companies trust us</h6>
                <GoogleOriginal size={30} />
                <GoogleOriginal size={30} />
                <GoogleOriginal size={30} />
            </div>
        </div>
    </div>
    )
};