// اختيار العناصر
const btnEdit = document.querySelector('.btn-edit');
const editModal = document.getElementById('editModal');

// فتح المودال عند الضغط على زر تعديل الملف الشخصي
btnEdit.addEventListener('click', () => {
  editModal.style.display = 'flex';
});

// غلق المودال عند الضغط خارج البوكس
editModal.addEventListener('click', (e) => {
  if (e.target === editModal) {
    editModal.style.display = 'none';
  }
});
