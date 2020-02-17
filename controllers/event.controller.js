const Event = require('../models/Event');

const eventController = (function() {
    return {
        getEvents: function(req, res, next) {
            Event.find()
            .then(eventDetail => {        
              console.log(eventDetail);
              })
            .catch(err => console.log(err));
        },
        postEvent: function(req, res){
            const newEvent = new Event({
                emp_id: req.body.emp_id,
                user_id: req.body.user_id,
                event_id: req.body.event_id,
                detail: {
                    title: req.body.event_title,
                    description: req.body.event_description,
                    instructors:req.body.instructors,
                    thumb_img: req.body.event_thumb_img,
                    held_on:  req.body.event_date,
                    held_at:  req.body.event_location             
                },
                published: req.body.event_published                 
            });

            newEvent
                .save()
                .then(event => res.json(event))
                .catch(err => console.log(err));
        }
    };
})();

module.exports = eventController;
