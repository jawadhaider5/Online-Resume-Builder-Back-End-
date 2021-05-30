var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    bioData:{
        firstName:{
            type: String,
            required: true
        },        
        lastName:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true,
            unique: true
        },        
        contact:{
            type: Number,
            required: true,
            unique: true
        },
        designation:{
            type: String
        }
    },
    education:[
        {
            Institute:{
                type: String,
                required: true
            },
            Degree:{
                type: String,
                required: true
            },
            PassingPercentage:{
                type: Number,
                required: true
            },
            PassingYear:{
                type: Number,
                required: true
            },
            StartDate:{
                type: String,
                required: true
            },
            EndDate:{
                type: String,
                required: true
            }
        }
    ],      
    projects:[
        {
            Title:{
                type: String,
                required: true
            },
            Description:{
                type: String,
                required: true
            }
        }
    ],
    experience:[
        {
            Company:{
                type: String,
                required: true
            },
            Years:{
                type: Number,
                required: true
            },
            Salary:{
                type: Number,
                required: true
            },
            StartDate:{
                type: String,
                required: true
            },
            EndDate:{
                type: String,
                required: true
            }
        }
    ],
    hobbies:[
        {
            Name:{
                type: String,
                required: true
            }
        }
    ]
});

var UserModel = mongoose.model('UserModel', userSchema);
module.exports = UserModel;


