import React, { useState } from 'react';
import Calendar from '@/shared/assets/images/icons/Calendar';
import Plus from '@/shared/assets/images/icons/Plus';
import Close from '@/shared/assets/images/icons/Close';
import Search from '@/shared/assets/images/icons/Search';
import './SubtaskForm.scss';

const SubtaskForm = ({ layout }) => {
  const [formData, setFormData] = useState({
    topic: '',
    description: '',
    notes: '',
    status: '',
    priority: '',
    comment: '',
    product: '',
    responsible: '',
    group: '',
    approvers: '',
    when_open: '',
    who_open: '',
    when_create: '',
    who_create: '',
  });

  const users = [
    "John Smith",
    "Emily Johnson",
    "Michael Brown",
    "Sarah Davis",
    "David Wilson",
    "Emma Miller",
    "James Andersonnnnnnnnnnnnnnnnnnnnnn",
    "Olivia Taylor",
    "Daniel Moore",
    "Sophia Martin",
    "William Jackson",
    "Isabella White",
  ];


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const formClass = layout === 'modal' ? 'form-modal' : 'form-page';

  return (
    <>
      <form className={`form ${formClass}`}
      // onSubmit={handleSubmit}
      >
        <div className="form-wrapper">
          <h1 className="title-1 title-task">
            {layout === 'modal' ? 'Новая запись' : 'STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller'}
          </h1>
        </div>
        <div className="form-wrapper">
          <div className="form-group">
            <label htmlFor="topic"><span className="required">*</span>Тема</label>
            <input
              type="text"
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-wrapper">
          <div className="form-group">
            <label htmlFor="status">Статус</label>
            <input
              type="text"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-wrapper">
          <div className="form-group">
            <label htmlFor="description">Описание</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-wrapper">
          <div className="form-group">
            <label htmlFor="product">Продукт</label>
            <input
              type="text"
              id="product"
              name="product"
              value={formData.product}
              onChange={handleChange}
            />
          </div>
          <button className="input-btn"><Search /></button>
        </div>

        <div className="form-wrapper">
          <div className="form-group">
            <label htmlFor="notes"><span className="required">*</span>Рабочие заметки</label>
            <input
              type="text"
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-wrapper">
          <div className="form-group">
            <label htmlFor="priority">Приоритет</label>
            <input
              type="text"
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-wrapper">
          <div className="form-group">
            <label htmlFor="responsible ">Ответственный</label>
            <div className="input-container approvers-input">
              <div className="approver-chip">
                <span>{users[0]}</span>
                <button
                  className="chip-close-btn"
                  onClick={() => handleRemoveUser(users[0])}
                  aria-label={`Удалить {users[0]}`}
                ></button>
              </div>
              <div className="input-icon">
                <Close />
              </div>
            </div>
          </div>
          <button className="input-btn"><Plus /></button>
          <button className="input-btn"><Search /></button>
        </div>

        <div className="form-wrapper">
          <div className="form-group">
            <label htmlFor="group">Группа</label>
            <div className="input-container  approvers-input">
              <div className="approver-chip">
                <span>{users[0]}</span>
                <button
                  className="chip-close-btn"
                  onClick={() => handleRemoveUser(users[0])}
                  aria-label={`Удалить {users[0]}`}
                ></button>
              </div>
              <div className="input-icon">
                <Close />
              </div>
            </div>
          </div>
          <button className="input-btn"><Plus /></button>
          <button className="input-btn"><Search /></button>
        </div>

        <div className="form-wrapper">
          <div className="form-group">
            <label htmlFor="comment">Комментарий</label>
            <input
              type="text"
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-wrapper">
          <div className="form-group">
            <label htmlFor="approvers">Согласующие</label>
            <div className="approvers__wrapper">
              <div className="input-container approvers-input">
                {users.map((name, index) => (
                  <div className="approver-chip" key={index}>
                    <span className='approver-text'>{name}</span>
                    <button
                      className="chip-close-btn"
                      onClick={() => handleRemoveUser(index)}
                      aria-label={`Удалить ${name}`}
                    ></button>
                  </div>
                ))}
                <div className="input-icon">
                  <Close />
                </div>
              </div>
              <button className="input-btn"><Plus /></button>
              <button className="input-btn"><Search /></button>
            </div>
          </div>
        </div>

        <div className="form-wrapper">
          <div className="form-group">
            <label htmlFor="when_create">Когда открыто</label>
            <input
              type="date"
              id="when_open"
              name="when_open"
              value="24.10.2024"
              onChange={(e) => {
                const value = e.target.value;
                const formattedValue = value.split('-').reverse().join('.');
                setFormData({ ...formData, when_create: formattedValue });
              }}
              className="date-input"
            />
          </div>
          <button className="input-btn"><Calendar /></button>
        </div>

        <div className="form-wrapper">
          <div className="form-group">
            <label htmlFor="when_create">Когда создано</label>
            <input
              type="date"
              id="when_create"
              name="when_create"
              value="24.10.2024"
              onChange={(e) => {
                const value = e.target.value;
                const formattedValue = value.split('-').reverse().join('.');
                setFormData({ ...formData, when_create: formattedValue });
              }}
              className="date-input"
            />
          </div>
          <button className="input-btn"><Calendar /></button>
        </div>

        <div className="form-wrapper">
          <div className="form-group">
            <label htmlFor="who_open">Кем открыто</label>
            <div className="input-container approvers-input">
              <div className="approver-chip">
                <span>{users[0]}</span>
                <button
                  className="chip-close-btn"
                  onClick={() => handleRemoveUser(users[0])}
                  aria-label={`Удалить {users[0]}`}
                ></button>
              </div>
              <div className="input-icon">
                <Close />
              </div>
            </div>
          </div>
          <button className="input-btn"><Plus /></button>
          <button className="input-btn"><Search /></button>
        </div>

        <div className="form-wrapper">
          <div className="form-group">
            <label htmlFor="who_create">Кем создано</label>
            <div className="input-container approvers-input">
              <div className="approver-chip">
                <span>{users[0]}</span>
                <button
                  className="chip-close-btn"
                  onClick={() => handleRemoveUser(users[0])}
                  aria-label={`Удалить {users[0]}`}
                ></button>
              </div>
              <div className="input-icon">
                <Close />
              </div>
            </div>
          </div>
          <button className="input-btn"><Plus /></button>
          <button className="input-btn"><Search /></button>
        </div>
      </form>
    </>
  );

};

export default SubtaskForm;
