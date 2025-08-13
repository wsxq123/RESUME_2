import { DndContext, useDraggable } from '@dnd-kit/core';

function DraggableBox() {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggable-box',
  });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className='w-32 h-32 bg-blue-500 text-white flex items-center justify-center cursor-move'
    >
      拖我！
    </div>
  );
}

const TodoList = () => {
  return (
    <DndContext>
      <div className='min-h-screen flex items-center justify-center bg-blue-500'>
        <DraggableBox />
      </div>
    </DndContext>
  );
};

export default TodoList;
