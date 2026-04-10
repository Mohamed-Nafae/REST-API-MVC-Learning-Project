const Subscriber = require('../models/subscriber');

const getAllSubscriber = async(req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const getOneSubscriber = (req, res) => {
    res.json(res.subscriber)
};

const createOneSubscriber = async(req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.channel,
    })
    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};

const updateOneSubscriber = async(req, res) => {
    if (req.body.name != null) {
        res.subscriber.name = req.body.name
    }
    if (req.body.channel != null) {
        res.subscriber.subscribedToChannel = req.body.channel
    }
    try {
        const updatedSubscriber = await res.subscriber.save()
        res.json(updatedSubscriber)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};

const deleteOneSubscriber = async(req, res) => {
    try {
        await res.subscriber.deleteOne();
        res.json({ message: "Subscriber deleted successefully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const getSubscriber = async function(req, res, next) {
    let subscriber
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber == null) {
            return res.status(404).json({ message: 'subscriber doesn\'t exist' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    res.subscriber = subscriber
    next()
}


module.exports = {
    getAllSubscriber,
    getOneSubscriber,
    createOneSubscriber,
    updateOneSubscriber,
    deleteOneSubscriber,
    getSubscriber
}