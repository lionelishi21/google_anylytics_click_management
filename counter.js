// Event Management
const events = {};

function registerEvent(name, handler) {
  events[name] = handler;
}

function fireEvent(name, data) {
  if (events[name]) {
    events[name](data);
  }
}

// Variable Management
const variables = {};

function registerVariable(name, getter) {
  variables[name] = getter;
}

function getVariable(name) {
  if (variables[name]) {
    return variables[name]();
  }
}

// Action Management
const actions = {};

function registerAction(name) {
  actions[name] = [];
}

function addActionListener(actionName, trigger) {
  if (actions[actionName]) {
    actions[actionName].push(trigger);
  }
}

// Trigger Management
function createTrigger(name, conditions, eventName) {
  return {
    name,
    conditions,
    eventName,
    evaluate: function(element) {
      const conditionsMet = this.conditions.every(condition => {
        const { variableName, comparator, value } = condition;
        const variableValue = getVariable(variableName);
        return comparator(variableValue, value);
      });
      
      if (conditionsMet) {
        fireEvent(this.eventName, { element });
      }
    }
  };
}

// Initialize actions
['click', 'scroll'].forEach(actionName => {
  registerAction(actionName);

  document.addEventListener(actionName, function(e) {
    const target = e.target;

    // Run each trigger attached to this action
    actions[actionName].forEach(trigger => {
      trigger.evaluate(target);
    });
  });
});

// Variables
registerVariable('tagName', () => document.activeElement.tagName.toLowerCase());

// Events
registerEvent('button_click', (data) => { /* Button click event logic here */ });
registerEvent('link_click', (data) => { /* Link click event logic here */ });

// Triggers
const buttonClickTrigger = createTrigger(
  'button_click_trigger',
  [{ variableName: 'tagName', comparator: (a, b) => a === b, value: 'button' }],
  'button_click'
);