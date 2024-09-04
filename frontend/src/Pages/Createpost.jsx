import React, { useContext } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BtnBox from "../Components/BtnBox";
import BtnLetter from "../Components/BtnLetter";
import BtnBack from "../Components/BtnBack";
import MessageContext from "../Components/MessageContext";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import SortableItem from '../Components/SortableItem';


function Createpost() {
    const { input, setInput, handleSubmit, messages, setMessages } = useContext(MessageContext);

    const getMessagePos = id => messages.findIndex(mes => mes.id === id)

    const handleDragEnd = event => {
        const {active, over} = event

        if(active.id === over.id) return;

        setMessages(messages => {
            const originalPos = getMessagePos(active.id)
            const newPos = getMessagePos(over.id)

            return arrayMove(messages, originalPos, newPos)
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        handleSubmit(e);
    };
    return (
        <div className="Createpost">
            <header>
                <Navbar />
            </header>
            <main>
                <BtnBack path={-1} />
                <div className="Createpost__form">
                    <form onSubmit={handleFormSubmit}>
                        <div className="createpost-first-part">
                            <div className="Createpost__image">
                                <label htmlFor="file-input">
                                    <div className="box-input-image noto-sans-thai-looped-bold">
                                        <p>+ add a photo of your dish</p>
                                    </div>
                                </label>
                                <input type="file" id="file-input" accept="image/*" />
                            </div>
                            <div className="createpost-input-info noto-sans-thai-looped-bold">
                                <input type="text" className="fredoka" placeholder="Name..." />
                                <input type="text" className="noto-sans-thai-looped-bold" placeholder="+ add tags" />
                                <input type="text" className="noto-sans-thai-looped-bold" placeholder="+ add tags" />
                                <div>
                                    <label htmlFor="cook-time"><img src="./../../public/Image/Icon/FaRegClockB.svg" alt="Clock Icon" />&nbsp; Cook Time:</label>
                                    <input type="text" id="cook-time" />
                                </div>
                                <div>
                                    <label htmlFor="yield"><img src="./../../public/Image/Icon/usersB.svg" alt="Users Icon" />&nbsp; Yield:</label>
                                    <input type="text" id="yield" />
                                </div>
                                <input type="text" className="noto-sans-thai-looped-bold" placeholder="description..." />
                            </div>
                        </div>
                        <div className="createpost-second-part">
                            <div className="ingredient-box">
                                <div className="ingredient-box-input fredoka">
                                    <div>
                                        <label htmlFor="ingredients">Ingredients</label>
                                        <input type="text" id="ingredients" />
                                    </div>
                                    <div>
                                        <label htmlFor="quantity">quantity</label>
                                        <input type="text" id="quantity" />
                                    </div>
                                    <button type="button"><img src="./../../public/Image/Icon/trashcan.svg" alt="Trashcan Icon" /></button>
                                </div>
                                <BtnLetter name="+ ingredient" />
                                <img className="end-box-input" src="./../../public/Image/Icon/end-box-ingredient.svg" alt="End Box Icon" />
                            </div>
                            <div className="instruction-box-input fredoka">
                                <label htmlFor="instruction">Instruction</label>
                                <button type="button"><img src="./../../public/Image/Icon/trashcan.svg" alt="Trashcan Icon" /></button>
                                <input
                                    type="text"
                                    id="instruction"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                />
                                <BtnLetter name="+ add a photo" />
                                <div>
                                    <BtnLetter name="+ section" onClick={(e) => handleSubmit(e, 'section')} />
                                    <BtnLetter name="+ instruction" onClick={(e) => handleSubmit(e, 'instruction')} />
                                </div>
                                <button type="button"><img src="./../../public/Image/Icon/hamburger.svg" alt="Hamburger Icon" /></button>
                            </div>
                        </div>
                        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
                            <SortableContext items={messages} strategy={verticalListSortingStrategy}>
                                {messages.map((mes) => (
                                    <SortableItem key={mes.id} mes={mes} />
                                ))}
                            </SortableContext>
                        </DndContext>
                        <div className='btn-group-createpost'>
                            <BtnBox name="Cancel" />
                            <BtnBox name="Post" />
                        </div>
                    </form>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Createpost;
