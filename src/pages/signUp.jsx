import React from "react";
import './signUp.css'
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";

export const SignUp = () => {

    return (
        <div
            className="main_div">

            <div className="parent_Grid">

                <div className="first_Grid">

                    <div className="style_for_style" id="first_text" >
                        <h3>Google</h3>
                    </div>

                    <div className="style_for_style"  id="second_text">
                        <h3>Create your google account</h3>
                    </div>

                    <div className="style_for_style"  style={{ border: "1px solid black" }}>
                        <div className="first_textField"><TextField size= "small" fullWidth></TextField></div>
                       
                        <div className="first_textField"><TextField size="small" fullWidth></TextField></div>
                    </div>

                   
                    <div className="style_for_style" id="second_textField" style={{ border: "1px solid black" }}>
                        <div  className="second_textField">
                        <TextField size="small" fullWidth></TextField> 
                        </div>
                       
                    </div>

                    <div className="style_for_style" id="third_text" style={{ border: "1px solid black" }}>
                        <h6>you can use latter number & periods</h6>
                        <h5>User my current email adress instead</h5>
                    </div>

                    <div className="style_for_style" style={{ border: "1px solid black" }}>
                        <div><TextField></TextField></div>

                        <div><TextField></TextField></div>
                    </div>

                    <div className="style_for_style" id="fouth_text" style={{ border: "1px solid black" }}>
                        <h6>srfguhjkokpobhjhjioio ghjik hjhioko hghiuj</h6>
                    </div>

                    <div className="style_for_style" style={{ border: "1px solid black" }}>
                        <Button variant="text">Text</Button>
                        <Button variant="contained" size="small">
                            Small
                        </Button>
                    </div>
                </div>

                <div className="second_grid">
                </div>

            </div>

        </div>

    )


}