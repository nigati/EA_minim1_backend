import Faq from '../model/Faq';
import User from '../model/User';
import { Request, Response } from 'express';

const getFaq = async (req: Request, res: Response) => {
	const faq = await Faq.findById(req.params.id).populate('user');
	res.json({faq}).status(200);

};

const deleteFaq = async (req: Request, res: Response) => {

	const deleted = await Faq.findByIdAndRemove(req.params.id);
	if(!deleted){
		return res.status(404).json("Can't remove something that doesn't exist");
	}
	res.json({deleted}).status(200);
};


const getAll = async (req: Request, res: Response) => {

	const faqs = await Faq.find().populate('user');
	res.json(faqs);
};


const createFaq = async (req:Request, res: Response) => {

	const user = await User.findOne({name: req.body.user});
	if(!user){
		return res.json(user).status(404);
	}
	const title =req.body.title;
    const body=req.body.body;

	const faq = new Faq({title,user,body});
	try{
		await faq.save();
	}
	catch(err){
		return res.json(res).status(500);
	}

	return res.json({message: "FAQ created",faq}).status(200);

}
const updateFAQ = async (req: Request, res: Response) => {


  const _id = req.params.id;
  const { title, user, body, dayOfCreation} = req.body;
  const updatedFAQ = await Faq.findByIdAndUpdate(_id, {
	title,
    user,
    body,
    dayOfCreation,});
  return res.json({message: "FAQ updated",Faq}).status(200)

}

export default {
	getFaq,
	deleteFaq,
	getAll,
	updateFAQ,
	createFaq,
};