import {createElement} from '../render.js';

function createTripFiltersTemplate() {
  return (
    '<form class="trip-filters" action="#" method="get">\n' +
    '                <div class="trip-filters__filter">\n' +
    '                  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked="">\n' +
    '                  <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="trip-filters__filter">\n' +
    '                  <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n' +
    '                  <label class="trip-filters__filter-label" for="filter-future">Future</label>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="trip-filters__filter">\n' +
    '                  <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n' +
    '                  <label class="trip-filters__filter-label" for="filter-present">Present</label>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="trip-filters__filter">\n' +
    '                  <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n' +
    '                  <label class="trip-filters__filter-label" for="filter-past">Past</label>\n' +
    '                </div>\n' +
    '\n' +
    '                <button class="visually-hidden" type="submit">Accept filter</button>\n' +
    '              </form>'
  );
}

export default class NewTripFilters {
  getTemplate() {
    return createTripFiltersTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
