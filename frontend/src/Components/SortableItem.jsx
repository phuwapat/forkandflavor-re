import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useDraggable } from "@dnd-kit/core";

function SortableItem({ mes }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: mes.id });
    // const { listeners: handleListeners, setNodeRef: setHandleRef} = useDraggable({id: mes.id, handle:true})
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style}  className='instruction-list'>
            <div>
                <button type="button"><img src='../../public/Image/Icon/trashcan.svg' alt="Trashcan Icon"/></button>
                {mes.type === 'section' && <div className='section dragdrop-content noto-sans-thai-looped-bold' id={mes.id}><strong>{mes.content}</strong></div>}
                {mes.type === 'instruction' && <div className='instruction dragdrop-content noto-sans-thai-looped-regular' id={mes.id}>{mes.content}</div>}
                <button type="button" {...listeners} {...attributes}><img src='../../public/Image/Icon/hamburger.svg' alt="Hamburger Icon"/></button>
            </div>
        </div>
    );
}

export default SortableItem