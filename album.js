document.addEventListener('DOMContentLoaded', function () {
  const jsonPath = 'lista_album.json';

  function carregarDados(callback) {
      fetch(jsonPath)
          .then(response => response.json())
          .then(data => callback(data))
          .catch(error => console.error('Erro ao carregar dados:', error));
  }

  function construirGaleria(data) {
      const galleryContainer = document.getElementById('gallery');

      data.forEach((photo, index) => {
          const card = `
              <div class="col-md-4 mb-4">
                  <div class="card card-anim">
                      <img src="${photo.path}" class="card-img-top img-fluid cur-p" alt="${photo.title}" data-toggle="modal" data-target="#modal${index}">
                      <div class="card-body">
                          <p class="card-title text-center">${photo.title}</p>
                      </div>
                  </div>
              </div>
              
              <div class="modal fade" id="modal${index}" tabindex="-1" role="dialog" aria-labelledby="modalDefault" aria-hidden="true">
                  <div class="modal-dialog modal-lg" role="document">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h5 class="modal-title" id="modalDefault">${photo.title}</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                              </button>
                          </div>
                          <div class="modal-body">
                              <img src="${photo.path}" class="img-fluid cursor-pointer" alt="${photo.title}">
                              <p class="text-center mt-3">${photo.desc}</p>
                          </div>
                      </div>
                  </div>
              </div>
          `;
          galleryContainer.innerHTML += card;
      });
  }

  carregarDados(construirGaleria);
});
