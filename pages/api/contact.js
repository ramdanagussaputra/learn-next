import mongoConnection from '../../lib/mongo-connection-lib';
import Contact from '../../lib/model-lib';

const Handler = async (req, res) => {
    await mongoConnection();

    if (req.method !== 'POST') return;
    try {
        const { name, email, message } = req.body;

        const contact = await Contact.create({
            name,
            email,
            message,
        });

        console.log(contact);
        res.status(200).json({
            status: 'success',
            data: contact,
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};

export default Handler;
